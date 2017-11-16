// import React from 'react'
// import {Meteor} from 'meteor/meteor'
//
// import {
//   Form, Input, Modal, Button, message
// } from 'antd';
//
// import '../../layouts/index.css'
//
// const FormItem = Form.Item;
//
// class IndexForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false,
//     }
//   }
//
//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };
//
//   handleOk = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         Meteor.call('partner.insert', values, (error, result) => {
//           if (error) {
//             message.error(error.reason);
//             return false;
//           } else {
//             this.props.form.resetFields();
//             message.success('创建成功');
//             this.setState({
//               visible: false,
//             });
//           }
//         });
//       } else {
//         message.error('Error');
//         return false;
//       }
//     });
//   };
//
//   handleCancel = () => {
//     this.setState({
//       visible: false,
//     });
//   };
//
//   render() {
//     const {getFieldDecorator} = this.props.form;
//     const {visible} = this.state;
//     const formItemLayout = {
//       labelCol: {span: 6},
//       wrapperCol: {span: 14},
//     };
//     return (
//       <div>
//         <Button onClick={this.showModal}>创建数据</Button>
//         <Modal title="创建"
//                visible={visible}
//                onOk={this.handleOk}
//                onCancel={this.handleCancel}
//         >
//           <Form>
//             <FormItem
//               {...formItemLayout}
//               label="姓名"
//               hasFeedback
//             >
//               {getFieldDecorator('name', {
//                 rules: [{required: true, message: 'Please input your imageUrl!'}],
//               })(
//                 <Input/>
//               )}
//             </FormItem>
//
//             <FormItem
//               {...formItemLayout}
//               label="姓名"
//               hasFeedback
//             >
//               {getFieldDecorator('name', {
//                 rules: [{required: true, message: 'Please input your imageUrl!'}],
//               })(
//                 <Input/>
//               )}
//             </FormItem>
//
//             <FormItem
//               {...formItemLayout}
//               label="手机号"
//               hasFeedback
//             >
//               {getFieldDecorator('tel', {
//                 rules: [{required: true, message: 'Please input your imageUrl!'}],
//               })(
//                 <Input/>
//               )}
//             </FormItem>
//
//             <FormItem
//               {...formItemLayout}
//               label="邮箱"
//               hasFeedback
//             >
//               {getFieldDecorator('email', {
//                 rules: [{required: true, message: 'Please input your imageUrl!'}],
//               })(
//                 <Input/>
//               )}
//             </FormItem>
//
//             <FormItem
//               {...formItemLayout}
//               label="留言"
//               hasFeedback
//             >
//               {getFieldDecorator('ly', {
//                 rules: [{required: true, message: 'Please input your imageUrl!'}],
//               })(
//                 <Input/>
//               )}
//             </FormItem>
//           </Form>
//         </Modal>
//       </div>
//     );
//   }
// }
//
// export default Form.create()(IndexForm)