import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers';
import businessSetupSteps from 'app/main/pages/business-setup/Steps/store/reducers';
import businessSetup from 'app/main/pages/business-setup/store/reducers';
import agendaApp from 'app/main/agenda/store/reducers';
import calendarApp from 'app/main/calendar/store/reducers';

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        fuse,
        quickPanel,
        businessSetupSteps,
        businessSetup,
        agendaApp,
        calendarApp,
        ...asyncReducers
    });

export default createReducer;
