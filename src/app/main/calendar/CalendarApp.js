import React,{useEffect, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/styles';
import {FusePageSimple,FusePageCarded, FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import CalendarAppContent from './CalendarAppContent';
import CalendarAppSpeedDial from './CalendarAppSpeedDial';
import * as Actions from './store/actions';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import withSizes from 'react-sizes'
import { compose } from 'redux'

function CalendarApp(props)  {
    const useStyles = makeStyles(theme => ({}));
    const pageLayout = useRef(null);
    
    const classes = useStyles();
        return (
            <React.Fragment>
            <FusePageSimple
            classes={{
                contentWrapper: "p-24 pb-20 sm:pb-20 max-h-full",
                root   : "w-full",
                content: "flex flex-col",
                header : "items-center min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
                contentToolbar={
                    <div className="px-24"><h4>My Calendar</h4></div>
                }
                content={
                    <CalendarAppContent isMobile={props.isMobile} />
                }
                ref={pageLayout}
                innerScroll
            />

            <FuseAnimate animation="transition.expandIn" delay={1000}>
                <CalendarAppSpeedDial/>
            </FuseAnimate>
            </React.Fragment>
        )
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 480,
})

export default compose(
    withSizes(mapSizesToProps),
    withReducer('calendarApp', reducer)
)(CalendarApp);