import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { Table } from 'antd'
const { Column } = Table

const formatLevel = level => {
  const levels = {
    '1': '一级单位',
    '2': '二级单位',
    '3': '三级单位'
  }
  return levels[level]
}
const formatRole = role => {
  const roles = {
    super: '超级管理员',
    admin: '管理员',
    leader: '主管领导',
    reviewer: '审核人员',
    staff: '会务人员',
    finance: '财务人员',
    section: '各级单位'
  }
  return roles[role.toString()]
}
const formatRule = user => ({
  key: user._id,
  username: user.username,
  email: user.emails && user.emails[0].address,
  headName: user.headName,
  headTel: user.headTel,
  title: user.title,
  abbr: user.abbr,
  level: formatLevel(user.level),
  role: user.roles && formatRole(user.roles.__global_roles__)
})
const formatUsers = users => users.map(formatRule)

const AccountTable = ({ loading, allUsers }) => {
  if (loading) {
    return (
      <Table dataSource={allUsers}>
        <Column title='用户名' dataIndex='username' key='username' />
        <Column title='电子邮箱' dataIndex='email' key='email' />
        <Column title='负责人姓名' dataIndex='headName' key='headName' />
        <Column title='负责人电话' dataIndex='headTel' key='headTel' />
        <Column title='单位全称' dataIndex='title' key='title' />
        <Column title='单位简称' dataIndex='abbr' key='abbr' />
        <Column title='单位级别' dataIndex='level' key='level' />
        <Column title='权限' dataIndex='role' key='role' />
        <Column
          title='操作'
          key='action'
          render={(text, record) =>
            <span>
              <Link to={`/section/edit/${record.key}`}>编辑</Link>
              <span className='ant-divider' />
              <a href='#'>删除</a>
            </span>}
        />
      </Table>
    )
  } else {
    return <Loading size='large' height='300px' />
  }
}

export default createContainer(() => {
  const handleUsers = Meteor.subscribe('allUsers')
  const allUsers = formatUsers(
    Meteor.users.find({}, { sort: { createdAt: -1 } }).fetch()
  )

  return {
    loading: handleUsers.ready(),
    allUsers
  }
}, AccountTable)
