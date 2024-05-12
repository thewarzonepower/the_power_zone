import {
    ACTIONS,HMSUserType
} from '../Interface/hmsType';

type InitialState = {
    loading:boolean
}

const initialState:InitialState = {
    loading:false,
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
        default:
            return state;
    }
}

export default HMSReducer