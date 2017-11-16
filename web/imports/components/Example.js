import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data';
import IndexForm from './IndexForm';

class Example extends React.Component {
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
    const {examples, loading} = this.props;

    return (
      <div>
        <div style={{background: '#21b5c7', color: '#fff'}} className="lineTitle">
          <span style={{color: '#fff'}}>合作案例</span>
          <div style={{padding: '30px 30px 0 30px'}}>
            <Grid>
              <Row>
                {loading ? examples.map((v, i) => {
                  return (
                    <Col key={i} xs={12} md={4}>
                      <Thumbnail bsClass="thumbnail"
                                 src={v.imageUrl}
                                 alt="242x200">
                        <div className="thumbnailTitle">{v.title}</div>
                        <Button onClick={this.showModal} bsStyle="primary">了解详情</Button>
                      </Thumbnail>
                    </Col>
                  )
                }) : <Loading size='large' height='300px'/>}
              </Row>
            </Grid>
          </div>
          <IndexForm handleCancel={this.handleCancel} visible={visible}/>
        </div>
      </div>

    )
  }
}

Example.propTypes = {
  loading: PropTypes.bool,
  examples: PropTypes.array,
};

export default Example
