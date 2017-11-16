import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, message, Table, Popconfirm
} from 'antd';
import {Meteor} from 'meteor/meteor';
import Banners from '/lib/model/banner'
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

  // http api

  // componentWillMount() {
  //   Meteor.call('banner.fetch', (error, result) => {
  //     if (error) {
  //       message.error(error.reason);
  //     } else {
  //       console.log('fetch', result)
  //     }
  //   })
  // }

  handleCancelOrder = (e, contactId) => {
    e.preventDefault();

    Meteor.call('banner.remove', contactId, (error, result) => {
      if (error) {
        message.error(error.reason);
      } else {
        message.success('success');
      }
    })
  };

  handleEditOrder = (e, bannerId) => {
    e.preventDefault();

    const Bannersone = Banners.findOne(bannerId);
    this.setState({
      visible: true,
      data: Bannersone
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values._id = this.state.data._id;
        console.log('update one', values);
        Meteor.call('banner.update', values, (error, result) => {
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
    const {banners, loading} = this.props;
    const columns = [
      //   {
      //   title: '预览',
      //   dataIndex: 'yl',
      //   key: 'yl',
      //   render:
      //     (text, banner) => (
      //       <img style={{width: 120}} src={banner.imageUrl}/>
      //     ),
      // },
      {
        title: '图片',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
      }, {
        title: '操作',
        key: 'action',
        render:
          (text, banner) => (
            <div>
              <a onClick={e => this.handleEditOrder(e, banner._id)}>编辑</a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Popconfirm
                title='是否确认删除'
                onConfirm={e => this.handleCancelOrder(e, banner._id)}
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
            <Table rowKey='_id' bordered={true} onChange={this.handleChange} columns={columns} dataSource={banners}
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
  banners: PropTypes.array,
  onCancel: PropTypes.func,
};

export default createContainer(() => {
  const handleContacts = Meteor.subscribe('allBanners');
  return {
    loading: handleContacts.ready(),
    banners: Banners.find({}, {sort: {createdAt: 1}}).fetch(),
  };
}, Form.create()(IndexPage));

