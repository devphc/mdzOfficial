import React from 'react'
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor'

import {
  Form, Input, Modal, message
} from 'antd';

import '../../layouts/index.css'

const FormItem = Form.Item;

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
        Meteor.call('banner.update', values, (error, result) => {
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
              label="图表"
              hasFeedback
            >
              {getFieldDecorator('imageUrl', {
                rules: [{required: true, message: 'Please input your imageUrl!'}],
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

