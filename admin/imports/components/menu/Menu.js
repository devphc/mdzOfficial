import {Meteor} from 'meteor/meteor'
import React from 'react'
import {Link} from 'react-router-dom'
import {
  hasPermission,
  VIEW_ROOM,
  VIEW_SECTION,
  VIEW_REVIEW,
  VIEW_OWNER_ORDER,
  VIEW_ALL_ORDER,
  VIEW_FEEDBACK
} from '/lib/helper/roles'

import {Menu, Icon} from 'antd'

// const SubMenu = Menu.SubMenu

export default ({location, user, roles}) =>
  <Menu theme="dark" selectedKeys={[`${location.pathname}`]} mode="inline">
    <Menu.Item key='/'>
      <Link to='/'><Icon type="dot-chart"/><span>图片轮播</span></Link>
    </Menu.Item>

    <Menu.Item key='/project'>
      <Link to='/project'><Icon type="dot-chart"/><span>解决方案</span></Link>
    </Menu.Item>

    <Menu.Item key='/example'>
      <Link to='/example'><Icon type="dot-chart"/><span>合作案例</span></Link>
    </Menu.Item>

    <Menu.Item key='/partner'>
      <Link to='/partner'><Icon type="dot-chart"/><span>合作伙伴</span></Link>
    </Menu.Item>

    <Menu.Item key='/coreMember'>
      <Link to='/coreMember'><Icon type="dot-chart"/><span>核心成员</span></Link>
    </Menu.Item>

    <Menu.Item key='/contact'>
      <Link to='/contact'><Icon type="dot-chart"/><span>用户留言</span></Link>
    </Menu.Item>


    {/*{hasPermission(VIEW_SECTION, roles)*/}
    {/*? <Menu.Item key='/section'>*/}
    {/*<Link to='/section'>单位管理</Link>*/}
    {/*</Menu.Item>*/}
    {/*: null}*/}

    {/*{hasPermission(VIEW_SECTION, roles)*/}
    {/*? <Menu.Item key='/test'>*/}
    {/*<Link to='/test'><Icon type="dot-chart"/><span>test</span></Link>*/}
    {/*</Menu.Item>*/}
    {/*: null}*/}

    {/*{hasPermission(VIEW_ROOM, roles)*/}
    {/*? <SubMenu title='会议室预订'>*/}
    {/*<Menu.Item key='/reservation'>*/}
    {/*<Link to='/reservation'>开始预订</Link>*/}
    {/*</Menu.Item>*/}
    {/*<Menu.Item key='/reservation/orders'>*/}
    {/*<Link to='/reservation/orders'>查看已预订</Link>*/}
    {/*</Menu.Item>*/}
    {/*</SubMenu>*/}
    {/*: null}*/}

    {/*{hasPermission(VIEW_REVIEW, roles)*/}
    {/*? <Menu.Item key='/admin/reservation/review'>*/}
    {/*<Link to='/admin/reservation/review'>会议审核</Link>*/}
    {/*</Menu.Item>*/}
    {/*: null}*/}

    {/*{hasPermission(VIEW_FEEDBACK, roles)*/}
    {/*? <Menu.Item key='/admin/reservation/feedback'>*/}
    {/*<Link to='/admin/reservation/feedback'>会务评价</Link>*/}
    {/*</Menu.Item>*/}
    {/*: null}*/}

    {/*{hasPermission(VIEW_OWNER_ORDER, roles)*/}
    {/*? <SubMenu title='账单缴费'>*/}
    {/*<Menu.Item key='/orders'>*/}
    {/*<Link to='/orders'>创建付款单</Link>*/}
    {/*</Menu.Item>*/}
    {/*<Menu.Item key='/transactions'>*/}
    {/*<Link to='/transactions'>查看付款单</Link>*/}
    {/*</Menu.Item>*/}
    {/*</SubMenu>*/}
    {/*: null}*/}

    {/*{hasPermission(VIEW_ALL_ORDER, roles)*/}
    {/*? <Menu.Item key='/transactions'>*/}
    {/*<Link to='/transactions'>账单缴费</Link>*/}
    {/*</Menu.Item>*/}
    {/*: null}*/}

    {user
      ? <Menu.Item key='/logout'>
        <div onClick={() => Meteor.logout()}><Icon type="poweroff"/><span>退出</span></div>
      </Menu.Item>
      : <Menu.Item key='/login'>
        <Link to='/login'><Icon type="poweroff"/><span>登录</span></Link>
      </Menu.Item>}
  </Menu>
