import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Form, Icon, Input, Button, Select } from 'antd'
const FormItem = Form.Item
const Option = Select.Option
import { withRouter } from 'react-router-dom'

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class HorizontalLoginForm extends React.Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
    // To disabled submit button at the beginning.
    this.props.form.validateFields()
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        Meteor.call('createUserAccount', values, (error, result) => {
          if (error) {
            console.log('createUserAccount fail:', error)
          } else {
            console.log('createUserAccount success:', result)
            this.props.history.push(`/section/edit/${result.userId}`)
          }
        })
      }
    })
  }
  render () {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form

    // Only show error after a field is touched.
    const usernameError =
      isFieldTouched('username') && getFieldError('username')
    const emailError = isFieldTouched('email') && getFieldError('email')
    const roleError = isFieldTouched('role') && getFieldError('role')
    return (
      <Form layout='inline' onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={usernameError ? 'error' : ''}
          help={usernameError || ''}
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ fontSize: 13 }} />}
              placeholder='用户名'
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={emailError ? 'error' : ''}
          help={emailError || ''}
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入单位邮箱' }]
          })(
            <Input
              prefix={<Icon type='mail' style={{ fontSize: 13 }} />}
              placeholder='电子邮箱'
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={roleError ? 'error' : ''}
          help={roleError || ''}
        >
          {getFieldDecorator('role', {
            initialValue: 'section',
            rules: [{ required: true, message: '请选择权限' }]
          })(
            <Select style={{ width: 120 }}>
              <Option value='section'>各级单位</Option>
              <Option value='admin'>管理员</Option>
              <Option value='leader'>主管领导</Option>
              <Option value='reviewer'>审核人员</Option>
              <Option value='staff'>会务人员</Option>
              <Option value='finance'>财务人员</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button
            type='primary'
            htmlType='submit'
            disabled={hasErrors(getFieldsError())}
          >
            创建
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedHorizontalLoginForm = withRouter(
  Form.create()(HorizontalLoginForm)
)

export default WrappedHorizontalLoginForm
