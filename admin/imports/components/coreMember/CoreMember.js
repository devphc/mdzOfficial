import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, message, Table, Popconfirm
} from 'antd';
import {Meteor} from 'meteor/meteor';
import CoreMembers from '/lib/model/coreMember'
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
      data: '',
    }
  }

  handleCancelOrder = (e, coreMemberId) => {
    e.preventDefault();

    Meteor.call('coreMember.remove', coreMemberId, (error, result) => {
      if (error) {
        message.error(error.reason);
      } else {
        message.success('success');
      }
    })
  };

  handleEditOrder = (e, coreMemberId) => {
    e.preventDefault();

    const CoreMembersone = CoreMembers.findOne(coreMemberId);
    this.setState({
      visible: true,
      data: CoreMembersone
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {coreMembers, loading} = this.props;
    const columns = [{
      title: '职位',
      dataIndex: 'job',
      key: 'job',
    },{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },{
      title: '简介',
      dataIndex: 'summray',
      key: 'summray',
    }, {
      title: '图片',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
    }, {
      title: '操作',
      key: 'action',
      render:
        (text, coreMember) => (
          <div>
            <a onClick={e => this.handleEditOrder(e, coreMember._id)}>编辑</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Popconfirm
              title='是否确认删除'
              onConfirm={e => this.handleCancelOrder(e, coreMember._id)}
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
            <Table rowKey='_id' bordered={true} onChange={this.handleChange} columns={columns} dataSource={coreMembers}
                   pagination={{pageSize: 20}}
                   scroll={{x: 1300}}/>
          </div>
          : <Loading size='large' height='300px'/>
        }
      </div>
    );

    return (
      <div>
        <IndexForm/>
        <IndexEditForm data={this.state.data} onCancel={this.handleCancel} visible={this.state.visible}/>
        {table}
      </div>
    )
  }
}

IndexPage.propTypes = {
  loading: PropTypes.bool,
  coreMembers: PropTypes.array,
  onCancel: PropTypes.func,
};

export default createContainer(() => {
  const handleContacts = Meteor.subscribe('allCoreMembers');
  return {
    loading: handleContacts.ready(),
    coreMembers: CoreMembers.find({}, {sort: {createdAt: 1}}).fetch(),
  };
}, Form.create()(IndexPage));

