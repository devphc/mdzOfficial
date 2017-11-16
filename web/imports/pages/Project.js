import React from 'react';
import PropTypes from 'prop-types';
import {BackTop} from 'antd';
import {Grid, Row, Col} from 'react-bootstrap';
import {Meteor} from 'meteor/meteor';
import Projects from '../../lib/model/project';
import {createContainer} from 'meteor/react-meteor-data';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ImgText from '../components/ImgText';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {projects, loadingProjects} = this.props;

    return (
      <div style={{overflow: 'hidden'}}>
        <Header/>

        <div className="yewu">
          <img
            src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/jiejue1.jpg"/>
        </div>

        <ImgText projects={projects} loading={loadingProjects}/>

        <Footer/>

        <BackTop/>
      </div>
    );

  }
}

Example.propTypes = {
  loadingProjects: PropTypes.bool,
  projects: PropTypes.array,
};

export default createContainer(() => {
  const handleProjects = Meteor.subscribe('allProjects');
  return {
    loadingProjects: handleProjects.ready(),
    projects: Projects.find({}, {sort: {createdAt: 1}}).fetch(),
  };
}, Example);
