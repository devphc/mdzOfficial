import React from 'react';
// import PropTypes from 'prop-types';
import Loading from './Loading';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'

class OurTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const {projects, loading} = this.props;

    return (
      <div className="ourTeam">
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <div className="teamTitle">我们的团队</div>
              <div className="english">Our Team</div>
              <div className="teamSummray">
                我们的团队均是互联网行业内实力精英,深耕不辍,对用户习惯和客户需求把握更为精准。
                更有独特的战略视角和运营优势,为企业获得价值更大化而努力。我们热爱科技，敏锐创
                新的使用新技术;我们尊重艺术,相信好的设计能够穿凿更高的价值;我们也理解商业
                ,始终明白企业最终的需求
              </div>
              <Col xs={12} md={3}>
                <Thumbnail bsClass="thumbnail"
                           src='http://mpic.tiankong.com/45c/912/45c9125a953463ec2f3229f3520054cf/640.jpg'
                           alt="242x200">
                  <div className="thumbnailTitle">首席产品官/技术官</div>
                </Thumbnail>
              </Col>

              <Col xs={12} md={3}>
                <Thumbnail bsClass="thumbnail"
                           src='http://mpic.tiankong.com/45c/912/45c9125a953463ec2f3229f3520054cf/640.jpg'
                           alt="242x200">
                  <div className="thumbnailTitle">产品经理</div>
                </Thumbnail>
              </Col>

              <Col xs={12} md={3}>
                <Thumbnail bsClass="thumbnail"
                           src='http://mpic.tiankong.com/45c/912/45c9125a953463ec2f3229f3520054cf/640.jpg'
                           alt="242x200">
                  <div className="thumbnailTitle">研发团队</div>
                </Thumbnail>
              </Col>

              <Col xs={12} md={3}>
                <Thumbnail bsClass="thumbnail"
                           src='http://mpic.tiankong.com/45c/912/45c9125a953463ec2f3229f3520054cf/640.jpg'
                           alt="242x200">
                  <div className="thumbnailTitle">设计团队</div>
                </Thumbnail>
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

// OurTeam.propTypes = {
//   loading: PropTypes.bool,
//   projects: PropTypes.array,
// };

export default OurTeam
