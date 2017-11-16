import React from 'react'
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor'

import {
  Form, Input, Select, InputNumber, Switch, Radio, Slider, Modal, Button, message
} from 'antd';

import '../../layouts/index.css'

const FormItem = Form.Item;
// const Option = Select.Option;
// const RadioButton = Radio.Button;
// const RadioGroup = Radio.Group;

class IndexForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Meteor.call('coreMember.insert', values, (error, result) => {
          if (error) {
            message.error(error.reason);
            return false;
          } else {
            this.props.form.resetFields();
            message.success('创建成功');
            this.setState({
              visible: false,
            });
          }
        });
      } else {
        message.error('Error');
        return false;
      }
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {visible} = this.state;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    return (
      <div>
        <Button onClick={this.showModal}>创建数据</Button>
        <Modal title="创建"
               visible={visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
        >
          <Form>
            <FormItem
              {...formItemLayout}
              label="职位"
              hasFeedback
            >
              {getFieldDecorator('job', {
                rules: [{required: true, message: '请输入职位!'}],
              })(
                <Input/>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="姓名"
              hasFeedback
            >
              {getFieldDecorator('name', {
                rules: [{required: true, message: '请输入姓名!'}],
              })(
                <Input/>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="简介"
              hasFeedback
            >
              {getFieldDecorator('summray', {
                rules: [{required: true, message: '请输入简介!'}],
              })(
                <Input/>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="图片"
              hasFeedback
            >
              {getFieldDecorator('imageUrl', {
                rules: [{required: true, message: '请输入图片!'}],
              })(
                <Input/>
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

IndexForm.propTypes = {
  handleOk: PropTypes.func,
};

export default Form.create()(IndexForm)