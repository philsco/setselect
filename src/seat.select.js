import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Form, Row, Col } from 'react-bootstrap';

const styles = {
    inline: {
        "display": "inline"
    }
}

class SeatSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
            children: []
      }
    }

    render() {
        return (
        <Row>
        <FormGroup controlId="formControlsSelect" inline>
        <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
        </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
        <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
        </FormControl>
        </FormGroup>

        </Row>
        )
    }
}

export default SeatSelect;