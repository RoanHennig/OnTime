import {combineReducers} from 'redux';
import Step1 from './Step1.reducer';
import Step2 from './Step2.reducer';
import Step4 from './Step4.reducer';

const reducer = combineReducers({
    Step1,
    Step2,
    Step4
});

export default reducer;
