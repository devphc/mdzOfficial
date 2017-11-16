import React from 'react'
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor'

import {
  Form, Input, Select, Radio, Modal, message
} from 'antd';

import '../../layouts/index.css'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class IndexEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible});
  }

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values._id = this.props.data._id;
        console.log('update one', values);
        Meteor.call('coreMember.update', values, (error, result) => {
          if (error) {
            message.error(error.reason);
            return false;
          } else {
            message.success('success');
            setTimeout(() => {
              {
                this.componentWillReceiveProps(this.state.visible)
              }
            }, 10);
          }
        });
      } else {
        message.error('Error');
        return false;
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;

    const {visible} = this.state;

    const {onCancel, data} = this.props;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };

    return (
      <div>
        <Modal title="编辑"
               visible={visible}
               onOk={this.handleUpdate}
               okText="更新"
               onCancel={onCancel}
        >
          <Form>
            <FormItem
              {...formItemLayout}
              label="职位"
              hasFeedback
            >
              {getFieldDecorator('job', {
                rules: [{required: true, message: '请输入职位!'}],
                initialValue: data.job,
              })(
                <Input placeholder="请输入职位"/>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="姓名"
              hasFeedback
            >
              {getFieldDecorator('name', {
                rules: [{required: true, message: '请输入姓名!'}],
                initialValue: data.name,
              })(
                <Input placeholder="请输入姓名"/>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="简介"
              hasFeedback
            >
              {getFieldDecorator('summray', {
                rules: [{required: true, message: '请输入简介!'}],
                initialValue: data.summray,
              })(
                <Input placeholder="请输入简介"/>
              )}
            </FormItem>


            <FormItem
              {...formItemLayout}
              label="图片"
              hasFeedback
            >
              {getFieldDecorator('imageUrl', {
                rules: [{required: true, message: '请输入图片!'}],
                initialValue: data.imageUrl,
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

IndexEditForm.propTypes = {
  visible: PropTypes.bool,
};

// 不加 mapPropsToFields 取数据有 bug

export default Form.create({
  mapPropsToFields(props) {
    return props
  },
})(IndexEditForm)

