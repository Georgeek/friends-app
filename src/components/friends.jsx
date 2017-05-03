import React from 'react';
import { Grid, Row, Col, Button, Image } from "react-bootstrap";

function Friend(props) {
    return (
        <Row>
            <Col md={4} mdOffset={6}>
                <div className="friend--wrap">
                    <div className="friend--photo">
                        <Image src={props.img} alt="" circle />
                    </div>
                    <div className="friend--info">
                        <div className="friend--info__title">hello {props.name}</div>
                        <div className="friend--info__description">large awesome text about this good person for science!! Awesome description about {props.name}</div>
                    </div>
                    <Button bsStyle="primary">Friend</Button>
                </div>
            </Col>
        </Row>
    );
}

export default Friend;