import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item

class LoginForm extends React.Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values
        Meteor.loginWithPassword({ username }, password, (error, result) => {
          if (error) {
            console.log('loginWithPassword fail:', error)
          } else {
            console.log('loginWithPassword success:', result)
          }
        })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请填写用户名' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ fontSize: 13 }} />}
              placeholder='用户名'
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请填写密码' }]
          })(
            <Input
              prefix={<Icon type='lock' style={{ fontSize: 13 }} />}
              type='password'
              placeholder='密码'
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            登录
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(LoginForm)
