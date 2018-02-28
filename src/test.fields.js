
import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

const FieldGroup = ({ id, label, help, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

class TestFields extends Component {

    render() {
        return (
            <div>
            <FieldGroup
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter text"
        />{   }
        <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
        />{   }
        <FieldGroup id="formControlsPassword" label="Password" type="password" />
        />{   }
        <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
        />
        </div>
        )
    }
}

export default TestFields;