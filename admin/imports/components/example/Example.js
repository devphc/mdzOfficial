import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, message, Table, Popconfirm
} from 'antd';
import {Meteor} from 'meteor/meteor';
import Examples from '/lib/model/example'
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

  handleCancelOrder = (e, exampleId) => {
    e.preventDefault();

    Meteor.call('example.remove', exampleId, (error, result) => {
      if (error) {
        message.error(error.reason);
      } else {
        message.success('success');
      }
    })
  };

  handleEditOrder = (e, exampleId) => {
    e.preventDefault();

    const Examplesone = Examples.findOne(exampleId);
    this.setState({
      visible: true,
      data: Examplesone
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {examples, loading} = this.props;
    const columns = [{
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '图片',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
    }, {
      title: '操作',
      key: 'action',
      render:
        (text, example) => (
          <div>
            <a onClick={e => this.handleEditOrder(e, example._id)}>编辑</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Popconfirm
              title='是否确认删除'
              onConfirm={e => this.handleCancelOrder(e, example._id)}
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
            <Table rowKey='_id' bordered={true} onChange={this.handleChange} columns={columns} dataSource={examples}
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
  examples: PropTypes.array,
  onCancel: PropTypes.func,
};

export default createContainer(() => {
  const handleContacts = Meteor.subscribe('allExamples');
  return {
    loading: handleContacts.ready(),
    examples: Examples.find({}, {sort: {createdAt: 1}}).fetch(),
  };
}, Form.create()(IndexPage));

