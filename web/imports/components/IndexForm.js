import React from 'react'
import PropTypes from 'prop-types';
import {Meteor} from 'meteor/meteor'

import {Form, Input, message, Modal, Alert} from 'antd';

const {TextArea} = Input;
const FormItem = Form.Item;

class IndexForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Meteor.call('contact.insert', values, (error, result) => {
          if (error) {
            message.error(error.reason);
            return false;
          } else {
            this.props.form.resetFields();
            message.success('您的留言我们已收到,我们会尽快与您联系！');
            {
              this.componentWillReceiveProps(this.state.visible)
            }
          }
        });
      } else {
        message.error('请输入信息！');
        return false;
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {handleCancel} = this.props;
    const {visible} = this.state;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    return (
      <Modal title="用户留言"
             visible={visible}
             onOk={this.handleSubmit}
             onCancel={handleCancel}
             style={{top: '20%'}}
      >
        <Form>
          <FormItem
            {...formItemLayout}
            label="姓名"
            hasFeedback
          >
            {getFieldDecorator('name', {
              rules: [{required: true, message: '请输入您的姓名!'}],
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="电话"
            hasFeedback
          >
            {getFieldDecorator('tel', {
              rules: [{required: true, message: '请输入您的电话!'}],
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="邮箱"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{required: true, message: '请输入您的邮箱!'}],
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="留言"
            hasFeedback
          >
            {getFieldDecorator('ly', {
              rules: [{message: '请输入您的留言!'}],
            })(
              <TextArea rows={4}/>
            )}
          </FormItem>


          {/*<Upload*/}
          {/*className="avatar-uploader"*/}
          {/*name="avatar"*/}
          {/*showUploadList={false}*/}
          {/*action="shundata.oss-cn-qingdao.aliyuncs.com/"*/}
          {/*onChange={this.handleChange}*/}
          {/*>*/}
          {/*{*/}
          {/*imageUrl ?*/}
          {/*<img src={imageUrl} alt="" className="avatar"/> :*/}
          {/*<Icon type="plus" className="avatar-uploader-trigger"/>*/}
          {/*}*/}
          {/*</Upload>*/}
          {/*<Alert*/}
            {/*className="modalText"*/}
            {/*description="收到您的留言后，我们将尽快回复！"*/}
            {/*type="success"*/}
          {/*/>*/}
          <div className="modalText">收到您的留言后，我们将尽快回复！</div>
        </Form>
      </Modal>
    );
  }
}

IndexForm.propTypes = {
  handleCancel: PropTypes.func,
};

export default Form.create()(IndexForm);

