import {
    ACTIONS,HMSUserType
} from '../Interface/hmsType';

type InitialState = {
    loading:boolean;
    patientList:any;
}

const initialState:InitialState = {
    loading:false,
    patientList:[]
}

const HMSReducer = (
    state = initialState,
    action:HMSUserType
) => {
    switch(action.type) {
        case ACTIONS.SET_LOADING:
        return {
            ...state,
            loading:action.payload
        };
        case ACTIONS.GET_PATIENT_LIST:
            return {
              ...state,
              patientList: action.payload,
              loading: false
            };
        default:
            return state;
    }
}

export default HMSReducer