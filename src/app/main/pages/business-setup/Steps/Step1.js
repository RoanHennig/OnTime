import React, { Component } from 'react';
import Form, { Item } from 'devextreme-react/form';

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

        this.groupedItems = {
            businessDetails: [
               'FirstName', 'LastName', 'BusinessName', 'Phone', 'Website'
            ],
            businessLocation: [
                'Address', 'City', 'Province', 'Zipcode'
            ]
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
        >
            <Item itemType={'group'} caption={'Business Details'} items={this.groupedItems.businessDetails} />
            <Item itemType={'group'} caption={'Business Location'} items={this.groupedItems.businessLocation} />
            </Form>
      )
    }
}

export default Step1;