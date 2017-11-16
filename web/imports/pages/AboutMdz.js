import React from 'react';
import PropTypes from 'prop-types';
import {BackTop} from 'antd';
import {Grid, Row, Col} from 'react-bootstrap';
import {Meteor} from 'meteor/meteor';
import CoreMembers from '../../lib/model/coreMember';
import {createContainer} from 'meteor/react-meteor-data';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CoreMember from '../components/CoreMember';

class AboutMdz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {coreMembers, loadingCoreMembers} = this.props;

    return (
      <div style={{overflow: 'hidden', marginTop: 72}}>
        <Header/>

        <div className="lineTitleImg">
          <img className="aboutImg"
               src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC/about.jpg"/>
        </div>

        <div className="ourTeamAbout">
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <div className="teamTitle">我们的团队</div>
                <div className="english">Our Team</div>
                <div className="teamSummray">
                  门店涨团队凝聚了来自华为、阿里、百度、腾讯、秒针等国内外领先企业的资深专家，
                  组成具有一流创新力的营销、运营、创意、和研发团队，创始人leon在华为有十几年
                  的工作经验，国内大数据的开创者，人工智能专家，华为安全总工，连续创业者，我
                  们有独特的战略视角和运营优势，对用户习惯和客户需求把握更为精准，为企业获得
                  价值更大化而努力。我们热爱科技，敏锐创新的使用新技术；我们尊重艺术，相信好
                  的设计能够创造更高的价值；我们也理解商业，始终明白企业最终的需求。
                </div>
              </Col>
            </Row>
          </Grid>
        </div>


        <CoreMember coreMembers={coreMembers} loading={loadingCoreMembers}/>

        <Footer/>

        <BackTop/>
      </div>
    );

  }
}

AboutMdz.propTypes = {
  loadingCoreMembers: PropTypes.bool,
  coreMembers: PropTypes.array,
};

export default createContainer(() => {
  const handleContacts = Meteor.subscribe('allCoreMembers');
  return {
    loadingCoreMembers: handleContacts.ready(),
    coreMembers: CoreMembers.find({}, {sort: {createdAt: 1}}).fetch(),
  };
}, AboutMdz);
