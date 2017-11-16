import React from 'react';
import PropTypes from 'prop-types';
import {BackTop} from 'antd';
import {Button} from 'react-bootstrap';
import {Meteor} from 'meteor/meteor';
import Banners from '../../lib/model/banner';
import Examples from '../../lib/model/example';
import Partners from '../../lib/model/partner';
import {createContainer} from 'meteor/react-meteor-data';
// import {Link} from 'react-router-dom';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Example from '../components/Example';
import Partner from '../components/Partner';
// import OurTeam from '../components/OurTeam';
import Footer from '../components/Footer';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {banners, examples, partners, loadingBanners, loadingExamples, loadingPartners} = this.props;

    return (
      <div style={{overflow: 'hidden'}}>
        <Header/>

        <Banner banners={banners} loading={loadingBanners}/>

        <div style={{width: '100%'}}><img style={{width: '100%', display: 'block'}}
                                          src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/Ct/%E6%89%81%E5%B9%B3%E7%BD%91%E7%AB%99%E9%A6%96%E9%A1%B5UI%EF%BC%8D1-min.jpg"/></div>

        {/*<div className="lineTitle">*/}
        {/*<img className="xianLeft"*/}
        {/*src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E9%A6%96%E9%A1%B5/%E7%BA%BF.jpg"/>*/}
        {/*<span>解决方案</span>*/}
        {/*<img className="xianRight"*/}
        {/*src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E9%A6%96%E9%A1%B5/%E7%BA%BF.jpg"/>*/}
        {/*</div>*/}

        {/*<div className="solve">*/}
        {/*<div className="solveItem">*/}
        {/*<div className="solveItemTitle">连锁店</div>*/}
        {/*<div className="solveItemSum">如何提升进店顾客<br/>如何提升转化效率<br/>如何提升销售额*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="solveItem">*/}
        {/*<div className="solveItemTitle">展会</div>*/}
        {/*<div className="solveItemSum">如何提升参展人数*/}
        {/*<br/>如何提升展会影响<br/>如何提升展会效益*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="solveItem">*/}
        {/*<div className="solveItemTitle">景区</div>*/}
        {/*<div className="solveItemSum">如何提升游客数量<br/>如何提升消费水平<br/>如何提升景区收入</div>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*<Link to="/project">*/}
        {/*<Button className="xuz">了解更多</Button>*/}
        {/*</Link>*/}

        <Example examples={examples} loading={loadingExamples}/>

        <Partner partners={partners} loading={loadingPartners}/>

        {/*<OurTeam/>*/}

        <Footer/>

        <BackTop/>
      </div>
    );
  }
}

IndexPage.propTypes = {
  loadingBanners: PropTypes.bool,
  loadingExamples: PropTypes.bool,
  loadingPartners: PropTypes.bool,
  banners: PropTypes.array,
  examples: PropTypes.array,
  partners: PropTypes.array,
};

export default createContainer(() => {
  const handleBanners = Meteor.subscribe('allBanners');
  const handleExamples = Meteor.subscribe('allExamples');
  const handlePartners = Meteor.subscribe('allPartners');
  return {
    loadingBanners: handleBanners.ready(),
    loadingExamples: handleExamples.ready(),
    loadingPartners: handlePartners.ready(),
    banners: Banners.find({}, {sort: {createdAt: 1}}).fetch(),
    examples: Examples.find({}, {sort: {createdAt: 1}}).fetch(),
    partners: Partners.find({}, {sort: {createdAt: 1}}).fetch(),
  };
}, IndexPage);
