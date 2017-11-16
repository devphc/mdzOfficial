import _ from 'lodash'
import Ranges from '../model/banner'

export const timeStringToNumber = timeString => {
  const timeArray = timeString.split(':')
  return +timeArray[0] * 60 + +timeArray[1]
}

export const rangeLengthAndTotalPrice = (
  startedAtFormat,
  endedAtFormat,
  basePrice,
  period
) => {
  const startedAtTime = timeStringToNumber(startedAtFormat)
  const endedAtTime = timeStringToNumber(endedAtFormat)
  // console.log(startedAtTime, endedAtTime)

  const { order: startedOrder = 0 } =
    Ranges.findOne({
      period,
      $and: [
        { startedAtTime: { $lte: startedAtTime } },
        { endedAtTime: { $gt: startedAtTime } }
      ]
    }) || {}
  const { order: endedOrder = 0 } =
    Ranges.findOne({
      period,
      $and: [
        { startedAtTime: { $lt: endedAtTime } },
        { endedAtTime: { $gte: endedAtTime } }
      ]
    }) || {}
  // console.log(startedOrder, endedOrder)

  let errorReason
  if (startedOrder > endedOrder) {
    errorReason = '结束时间应晚于开始时间'
  }

  const range = _.range(startedOrder, endedOrder + 1)
  // console.log(range)
  // console.log(range.length)

  const selectedRanges = Ranges.find({ period, order: { $in: range } }).fetch()
  // console.log(selectedRanges)
  const totalPrice = selectedRanges.reduce((acc, val) => {
    return acc + basePrice * val.rate
  }, 0)
  // console.log(basePrice, totalPrice)

  return {
    rangeLength: range.length,
    totalPrice,
    errorReason
  }
}
