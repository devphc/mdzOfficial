import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Slider from 'react-slick';

import '../../lib/css/slick.css';

class Partner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {partners, loading} = this.props;

    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <div className="lineTitle">
        <img className="xianLeft"
             src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E9%A6%96%E9%A1%B5/%E7%BA%BF.jpg"/>
        <span>合作伙伴</span>
        <img className="xianRight"
             src="http://mdzweb.oss-cn-qingdao.aliyuncs.com/%E9%A6%96%E9%A1%B5/%E7%BA%BF.jpg"/>
        <div className="partner" style={{}}>
          <Slider {...settings}>
            {loading ? partners.map((v, i) => {
              return (
                <div key={i}>
                  <img className="indexImage"
                       src={v.imageUrl}/>
                </div>
              )
            }) : <Loading size='large' height='300px'/>}

          </Slider>
        </div>
      </div>
    )
  }
}

Partner.propTypes = {
  loading: PropTypes.bool,
  partners: PropTypes.array,
};

export default Partner
