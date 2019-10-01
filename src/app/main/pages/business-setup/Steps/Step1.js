import React, { Component } from 'react';
import { SelectBox, Form } from 'devextreme-react';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.companies = this.props.companies;
        this.state = {
          labelLocation: 'top',
          readOnly: false,
          showColon: true,
          minColWidth: 600,
          colCount: 2
        };
      }

    render () {
        const {
            labelLocation,
            readOnly,
            showColon,
            minColWidth,
            colCount
          } = this.state;
          return (        
            <Form
            id={'form'}
            formData={this.companies[0]}
            readOnly={readOnly}
            showColonAfterLabel={showColon}
            labelLocation={labelLocation}
            minColWidth={minColWidth}
            colCount={colCount}
        />
      )
    }
}

export default Step1;