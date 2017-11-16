import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="indexFooter">
        <Grid>
          <Row>


            {/*<img className="logo-img"*/}
            {/*src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E9%97%A8%E5%BA%97%E6%B6%A8logo/%E9%97%A8%E5%BA%97%E6%B6%A8logo2017-09-07%E5%89%AF%E6%9C%AC.png"/>*/}
            {/*</Col>*/}
            <div className="aboutUs">
              <Col xs={12} md={3} lg={3}>
                <div className="aboutUsItem footero">
                  <img className="logo-img"
                       src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E9%97%A8%E5%BA%97%E6%B6%A8logo/write.png"/>
                </div>
              </Col>

              <Col xs={12} md={3} lg={3}>
                <div className="aboutUsItem footero">
                  <span>关于我们</span>
                  <ul>
                    <Link to='/aboutMdz'>
                      <li>核心团队</li>
                    </Link>
                    <Link to='/aboutMdz'>
                      <li>发展历程</li>
                    </Link>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <div className="aboutUsItem footero">
                  <span>解决方案</span>
                  <ul>
                    <Link to='/project'>
                      <li>连锁店解决方案</li>
                    </Link>
                    <Link to='/project'>
                      <li>展会解决方案</li>
                    </Link>
                    <Link to='/project'>
                      <li>景点解决方案</li>
                    </Link>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <div className="aboutUsItem">
                  <span className="footero">联系我们</span>
                  <ul>
                    <li>电话：17710659651</li>
                    <li>邮件：mendianzhang@shun.tt</li>
                    <li>地址：北京市朝阳区建外SOHO西区15座7层</li>
                  </ul>
                </div>
              </Col>
            </div>
            {/*<Col xs={6} md={3} lg={3}>*/}
            {/*<div className="qrcode">微信二维码</div>*/}
            {/*</Col>*/}

            {/*<Col xs={6} md={3} lg={3}>*/}
            {/*<div className="qrcode">微博二维码</div>*/}
            {/*</Col>*/}
          </Row>
        </Grid>
      </div>

      <div className="beian">京ICP备17056018号 ©2016-2017 Shunfeng Communication. All right</div>

    </div>
  )
}

export default Footer
