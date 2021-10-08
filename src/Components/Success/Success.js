import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Success.css";
import Rating from 'react-rating';
import {RingContext} from '../Home/Home.js'
const Success = (props) => {
    const { name, year, img, desc, star } = props.success;
    const contextValue= useContext(RingContext);
    let furtherTitle="";
    if(name===contextValue){
        furtherTitle="(Also a Founding Member)";
    }
    return (
        <div>
            <Col>
                <Card className="vh-100">
                    <Card.Img variant="top" src={img} className="img-fluid h-50" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>{name}{furtherTitle}</Card.Title>
                        <Card.Title style={{ color: 'red', textAlign: 'center' }}>Student of {year}</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                            {desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{textAlign:'center'}}>
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star star-design"
                            fullSymbol="fas fa-star star-design"
                            readonly
                        />
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Success;