import {
    combineReducers
  } from 'redux';
  import HMSReducer from '../views/Hospital-Management-System/Reducer/hmsReducer';

  
  const rootReducer = combineReducers({
    HMSReducer
  });
  
  export default rootReducer;