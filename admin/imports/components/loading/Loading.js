import React from 'react'
import { Row, Col, Spin } from 'antd'

export default ({ size, height }) =>
  <Row
    type='flex'
    justify='space-around'
    align='middle'
    style={{ minHeight: height }}
  >
    <Col>
      <Spin size={size} />
    </Col>
  </Row>
