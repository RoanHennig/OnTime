import {combineReducers} from 'redux';
import Step1 from './Step1.reducer';
import Step2 from './Step2.reducer';

const reducer = combineReducers({
    Step1,
    Step2
});

export default reducer;
