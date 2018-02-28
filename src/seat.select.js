import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap';

const styles = {
    inline: {
        "display": "inline"
    }
}

class SeatSelect extends Component {

    render() {
        return (
        <Row>
            <Col md={6}>
        <FormGroup controlId="formControlsSelect" inline>
        <FormControl componentClass="select" placeholder="select">
        <option value="select">Select Row</option>
        <option value="r1">Front Seat</option>
        <option value="r2">Row 2</option>
        <option value="r3">Row 3</option>
        </FormControl>
        </FormGroup>
        </Col>

        <Col md={6}>
        <FormGroup controlId="formControlsSelect">
        <FormControl componentClass="select" placeholder="select">
        <option value="select">Select Position</option>
        <option value="lw">Left Window</option>
        <option value="ct">Center</option>
        <option value="rw">Right Window</option>
        </FormControl>
        </FormGroup>
        </Col>

        </Row>
        )
    }
}

SeatSelect.protoType ={
    pos: PropTypes.array,
    pos: PropTypes.object
}

export default SeatSelect;