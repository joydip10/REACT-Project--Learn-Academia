import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Courses = (props) => {
    const { id, title, img, desc, price } = props.course;
    return (
        <div>
            <Col>
                <Card className="vh-100">
                    <Card.Img variant="top" src={img} className="img-fluid h-50" />
                    <Card.Body>
                        <Card.Title style={{textAlign:'center'}}>{title}</Card.Title>
                        <Card.Title style={{ color: 'red', textAlign:'center' }}>{price}</Card.Title>
                        <Card.Text  style={{textAlign:'justify'}}>
                            {desc}
                        </Card.Text>
                        {props.children}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Courses;