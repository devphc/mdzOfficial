import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, message, Table, Popconfirm
} from 'antd';
import {Meteor} from 'meteor/meteor';
import Projects from '/lib/model/project'
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

  handleCancelOrder = (e, contactId) => {
    e.preventDefault();

    Meteor.call('project.remove', contactId, (error, result) => {
      if (error) {
        message.error(error.reason);
      } else {
        message.success('success');
      }
    })
  };

  handleEditOrder = (e, projectId) => {
    e.preventDefault();

    const Projectsone = Projects.findOne(projectId);
    this.setState({
      visible: true,
      data: Projectsone
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values._id = this.state.data._id;
        Meteor.call('project.update', values, (error, result) => {
          if (error) {
            message.error(error.reason);
            return false;
          } else {
            message.success('更新成功');
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
    const {projects, loading} = this.props;
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
        (text, project) => (
          <div>
            <a onClick={e => this.handleEditOrder(e, project._id)}>编辑</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Popconfirm
              title='是否确认删除'
              onConfirm={e => this.handleCancelOrder(e, project._id)}
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
            <Table rowKey='_id' bordered={true} onChange={this.handleChange} columns={columns} dataSource={projects}
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
  projects: PropTypes.array,
  onCancel: PropTypes.func,
};

export default createContainer(() => {
  const handleContacts = Meteor.subscribe('allProjects');
  return {
    loading: handleContacts.ready(),
    projects: Projects.find({}, {sort: {createdAt: 1}}).fetch(),
  };
}, Form.create()(IndexPage));

