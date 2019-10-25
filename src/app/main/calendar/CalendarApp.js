import React, { useState, useRef } from 'react';
import { FusePageSimple, FuseAnimate } from '@fuse';
import CalendarAppToolbar from './CalendarAppToolbar';
import CalendarAppContent from './CalendarAppContent';
import CalendarAppSpeedDial from './CalendarAppSpeedDial';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import withSizes from 'react-sizes';
import { compose } from 'redux';

function CalendarApp(props) {
	const pageLayout = useRef(null);

	const [ scheduler, setScheduler ] = useState(null);
	return (
		<React.Fragment>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-24 pb-20 sm:pb-20 max-h-full',
					root: 'w-full',
					content: 'flex flex-col',
					header: 'items-center min-h-72 h-72 sm:h-136 sm:min-h-136'
				}}
				contentToolbar={<CalendarAppToolbar setScheduler={setScheduler} />}
				content={
					<CalendarAppContent scheduler={scheduler} setScheduler={setScheduler} isMobile={props.isMobile} />
				}
				ref={pageLayout}
				innerScroll
			/>

			<FuseAnimate animation="transition.fadeIn" delay={500}>
				<CalendarAppSpeedDial scheduler={scheduler} />
			</FuseAnimate>
		</React.Fragment>
	);
}

const mapSizesToProps = ({ width }) => ({
	isMobile: width < 480
});

export default compose(withSizes(mapSizesToProps), withReducer('calendarApp', reducer))(CalendarApp);
