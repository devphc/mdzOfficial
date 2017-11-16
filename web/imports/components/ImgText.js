import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class ImgText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {projects, loading} = this.props;

    return (
      <div style={{background: '#fff'}}>
        {loading ? projects.map((v, i) => {
          return (
            <div key={i} className="lineTitle">
              <img className="xianLeft"
                   src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E9%A6%96%E9%A1%B5/%E7%BA%BF.jpg"/>
              <span>{v.title}</span>
              <img className="xianRight"
                   src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E9%A6%96%E9%A1%B5/%E7%BA%BF.jpg"/>
              <div className="lineTitleImg"><img style={{width: '100%'}} src={v.imageUrl}/>
              </div>
            </div>
          )
        }) : <Loading size='large' height='300px'/>}
      </div>
    )
  }
}

ImgText.propTypes = {
  loading: PropTypes.bool,
  projects: PropTypes.array,
};

export default ImgText
