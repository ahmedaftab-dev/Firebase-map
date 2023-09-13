import React from 'react';
import { Card,Row,Col } from 'react-bootstrap';
import { ViserArea } from '../Chart/Viser';
import brandIcon from '../assets/images/iconsBrandBra05.png'
import './LocDetail.css'
import HeadBlock from '../block/headblock';
import moment from 'moment/moment';

const LocationDetail = (props) => {
    const { block,title,locData } = props;
    return (
      <>
        <div className='loc-detail-container'>
            <div>
              <HeadBlock {...block}/>
            </div>
            <div>
            {locData.map((item, i) => (
                <Card className='loc-detail-card' key={i}>
                    <Card.Body>
                        <Row className='card-row'>
                          <Col lg={3} md={6} xs={12} className="icon-info-col">
                              <img className='brand-img' src={brandIcon} alt="" />
                              <div>
                              <p className='mb-1'>{item.name.substring(0,30)}</p>
                              <p>{item.email}</p>
                              </div>
                          </Col>
                          <Col xs={12} md={6} lg={2} className="time-col">
                              <p>{moment("2022-04-27T14:42:12").fromNow()}</p>
                          </Col>
                          <Col xs={12} md={12} lg={7}>
                          <ViserArea />
                          </Col>
                        </Row>
                        
                        
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
      </>
    );
  };

  export default LocationDetail;