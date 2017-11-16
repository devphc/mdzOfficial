import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import {Grid, Row, Col} from 'react-bootstrap'

class CoreMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {coreMembers, loading} = this.props;

    return (
      <div className="lineTitle">
        <div className="coreMember">
          <Grid>
            <Row>
              {loading ? coreMembers.map((v, i) => {
                return (
                  <Col key={i} xs={12} md={12} lg={12}>
                    <div className="coreMemberItem">
                      <img src={v.imageUrl} className="coreMemberItemImg"/>
                      <div className="coreMemberItemTitle">
                        <div className="coreMemberItemDes">{v.job}</div>
                        <div className="coreMemberItemDes">{v.name}</div>
                        <div className="coreMemberItemDes">{v.summray}</div>
                      </div>
                    </div>
                  </Col>
                )
              }) : <Loading size='large' height='300px'/>}
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

CoreMember.propTypes = {
  loading: PropTypes.bool,
  banners: PropTypes.array,
};

export default CoreMember
