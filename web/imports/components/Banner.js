import React from 'react';
import PropTypes from 'prop-types';
import {Carousel} from 'antd';
import Loading from './Loading';
import {createContainer} from 'meteor/react-meteor-data';

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {banners, loading} = this.props;

    return (
      <Carousel autoplay>
        {loading ? banners.map((v, i) => {
          return (
            <img key={i} style={{marginTop: 72, height: 'auto'}}
                 src={v.imageUrl}/>
          )
        }) : <Loading size='large' height='300px'/>}
      </Carousel>
    )
  }
}

Banner.propTypes = {
  loading: PropTypes.bool,
  banners: PropTypes.array,
};

export default Banner
