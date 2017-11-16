import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, message, Table, Popconfirm
} from 'antd';
import {Meteor} from 'meteor/meteor';
import Contacts from '/lib/model/contact'
// import moment from '/lib/helper/dateToString'
import {createContainer} from 'meteor/react-meteor-data';
import Loading from '../loading/Loading';

import IndexForm from './IndexForm';
import IndexEditForm from './IndexEditForm';

const FormItem = Form.Item;


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
      data: '',
    }
  }

  handleCancelOrder = (e, contactId) => {
    e.preventDefault();

    Meteor.call('contact.remove', contactId, (error, result) => {
      if (error) {
        message.error(error.reason);
      } else {
        message.success('success');
      }
    })
  };

  handleEditOrder = (e, contactId) => {
    e.preventDefault();

    const Contactsone = Contacts.findOne(contactId);
    this.setState({
      visible: true,
      data: Contactsone
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values._id = this.state.data._id;
        console.log('update one', values);
        Meteor.call('contact.update', values, (error, result) => {
          if (error) {
            message.error(error.reason);
            return false;
          } else {
            message.success('更新成功');
            this.setState({
              visible: false,
              confirmLoading: false,
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
    const {contacts, loading} = this.props;
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '手机号',
      dataIndex: 'tel',
      key: 'tel',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '留言',
      dataIndex: 'ly',
      key: 'ly',
    }, {
      title: '操作',
      key: 'action',
      render:
        (text, contact) => (
          <div>
            {/*<a onClick={e => this.handleEditOrder(e, contact._id)}>编辑</a>*/}
            {/*&nbsp;&nbsp;|&nbsp;&nbsp;*/}
            <Popconfirm
              title='是否确认删除'
              onConfirm={e => this.handleCancelOrder(e, contact._id)}
              okText='是'
              cancelText='否'
            >
              <a>删除</a>
            </Popconfirm>
          </div>
        ),
    }];

    const table = (
      <div>
        {loading ?
          <div className="renderContacts">
            <Table rowKey='_id' bordered={true} onChange={this.handleChange} columns={columns} dataSource={contacts}
                   pagination={{pageSize: 20}}
                   scroll={{x: 1300}}/>
          </div>
          : <Loading size='large' height='300px'/>
        }
      </div>
    );

    return (
      <div>
        {/*<IndexForm/>*/}
        <IndexEditForm data={this.state.data} onCancel={this.handleCancel} visible={this.state.visible}/>
        {table}
      </div>
    )
  }
}

IndexPage.propTypes = {
  loading: PropTypes.bool,
  contacts: PropTypes.array,
  onCancel: PropTypes.func,
};

export default createContainer(() => {
  const handleContacts = Meteor.subscribe('allContacts');
  return {
    loading: handleContacts.ready(),
    contacts: Contacts.find({}, {sort: {createdAt: 1}}).fetch(),
  };
}, Form.create()(IndexPage));

