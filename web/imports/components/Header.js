import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import IndexForm from './IndexForm';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {visible} = this.state;

    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/index'><img className="logo-img"
                                   src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E9%97%A8%E5%BA%97%E6%B6%A8logo/%E9%97%A8%E5%BA%97%E6%B6%A8513-300.png"/></Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to='/index'><NavItem eventKey={1}>首页</NavItem></LinkContainer>
            <LinkContainer to='/project'><NavItem eventKey={1}>解决方案</NavItem></LinkContainer>
            <LinkContainer to='/aboutMdz'><NavItem eventKey={2}>关于我们</NavItem></LinkContainer>
            <NavItem onClick={this.showModal} eventKey={3}>联系我们</NavItem>
            <NavItem onClick={this.showModal} eventKey={4}>申请试用</NavItem>
          </Nav>
        </Navbar.Collapse>
        <IndexForm handleCancel={this.handleCancel} visible={visible}/>
      </Navbar>
    )
  }
}

export default Header
