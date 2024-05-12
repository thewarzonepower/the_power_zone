export const ACTIONS = {
    SET_LOADING: "hms/set_loading"
}

interface SetLoading {
    type: typeof ACTIONS.SET_LOADING;
    payload:boolean
}

export type HMSUserType = 
| SetLoading