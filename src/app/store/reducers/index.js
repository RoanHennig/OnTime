import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers';
import businessSetupSteps from 'app/main/pages/business-setup/Steps/store/reducers'

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        fuse,
        quickPanel,
        businessSetupSteps,
        ...asyncReducers
    });

export default createReducer;
