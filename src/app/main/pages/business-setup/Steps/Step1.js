import React, { Component } from 'react';
import Form, { Item } from 'devextreme-react/form';
import {Icon, Tooltip} from '@material-ui/core';
import GoogleMap from 'google-map-react';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Marker = ({ text }) =>         
<Tooltip title={text} placement="top">
    <Icon className="text-red">place</Icon>
</Tooltip>;

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			}
		}

        this.props.setBusinessDetails(this.props.businessDetails);
        this.onBusinessNameChanged = this.onBusinessNameChanged.bind(this);
        this.groupedItems = {
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
            colCount,
            businessDetails
          } = this.props.stepDetails;
          return (    
            <div>
                <Form
                    id={'form'}
                    formData={businessDetails}
                    readOnly={readOnly}
                    showColonAfterLabel={showColon}
                    labelLocation={labelLocation}
                    minColWidth={minColWidth}
                    colCount={colCount}
                    >
                    <Item itemType={'group'} caption={'Business Details'}>
                        <Item dataField={'FirstName'} />
                        <Item dataField={'LastName'} />
                        <Item dataField={'BusinessName'} editorOptions={{ onValueChanged:this.onBusinessNameChanged }} />
                        <Item dataField={'Phone'} />
                        <Item dataField={'Website'} />
                    </Item>
                    <Item itemType={'group'} caption={'Business Location'} items={this.groupedItems.businessLocation} />
                    
                </Form>
                <div className="w-full h-400">
                    <GoogleMap
                        bootstrapURLKeys={{
                            key: 'AIzaSyBW7u4uqkxWX2qQaJhLwuhwfE58I8irucY'
                        }}
                        defaultZoom={12}
                        defaultCenter={[59.955413, 30.337844]}
                    >
                    <Marker
                        lat={59.955413}
                        lng={30.337844}
                        text={businessDetails.BusinessName}
                    />
                    </GoogleMap>
                </div>
              </div>
      )
    }

    onBusinessNameChanged(e) {
        this.props.setBusinessName(e.value);
      }
}

const mapStateToProps = state => {
    return {
        stepDetails: state.businessSetupSteps.Step1
    };
}

const mapDispatchToProps = dispatch =>
{
    return bindActionCreators({
            setBusinessDetails     : Actions.setBusinessDetails,
            setBusinessName        : Actions.setBusinessName,
            getBusinessDetails        : Actions.getBusinessDetails
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1);