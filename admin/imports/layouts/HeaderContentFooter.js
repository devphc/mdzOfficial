import React from 'react'
import Menu from '../components/menu/Menu'
import {Layout} from 'antd';

const {Header, Content, Footer, Sider} = Layout;

import './index.css'

export default ({children, location, user, roles}) =>

  <Layout className="layout">
    <Sider>
      <div className="layout-logo"><img style={{width: 67}}
                                        src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E9%97%A8%E5%BA%97%E6%B6%A8logo/write.png"/>
      </div>
      <Menu location={location} user={user} roles={roles}/>
    </Sider>
    <Layout>
      <Header style={{background: '#fff', padding: 0, textAlign: 'center', fontSize: 18}}>
        {user ? <span>您好{user.username},</span> : null} 欢迎来到门店涨后台
      </Header>
      <Content style={{margin: 16}}>
        <div style={{padding: 24, background: '#fff', minHeight: 860}}>
          {children}
        </div>
      </Content>
      <Footer style={{textAlign: 'center', background: '#fff'}}>
        Ant Design ©2017 Created by Shun.Data
      </Footer>
    </Layout>
  </Layout>
