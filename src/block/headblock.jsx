
import moment from 'moment/moment';
import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import './headblock.css'



const HeadBlock = (props) => {
    const block=props
    console.log(props)
    return (
        <div className='head-block'>
           {props &&
            <Card>
                 <Card.Header>
                    <h4>Location {block[0].id}</h4>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={3} xs={12}>
                            <div>
                                <div className='pt-2'><span className='head-block-attr-span'>Description: </span></div>
                                <div className='pt-2'>{block[0].name}</div>
                            </div>
            
                        </Col>
                        <Col md={3} xs={12} className="head-block-middle">
                            <div>
                                <div className='pt-2'><span className='head-block-attr-span'>Label : </span>{block[0].phone}</div>
                                <div className='pt-2'><span className='head-block-attr-span'>ID : </span>{block[0].address.zipcode}</div>
                            </div>
                        </Col>
                        <Col md={3} xs={12} className="head-block-middle">
                            <div>
                                <div className='pt-2'><span className='head-block-attr-span'>tags : </span>{block[0].phone}</div>
                            </div>
                        </Col>
                        <Col md={3} xs={12}>
                            <div>
                                <div className='pt-2'><span className='head-block-attr-span'>Last Activity: </span>{moment("2022-04-27T14:42:12").fromNow()}</div>
                                
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
           }
        </div>
    )

};

export default HeadBlock;