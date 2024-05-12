export const ACTIONS = {
    SET_LOADING: "hms/set_loading",
    GET_PATIENT_LIST:"hms/get_patients_list"
}

interface SetLoading {
    type: typeof ACTIONS.SET_LOADING;
    payload:boolean
}
interface GetPatientList {
    type: typeof ACTIONS.GET_PATIENT_LIST;
    payload: Array<string | number>
}

export type HMSUserType = 
| SetLoading
| GetPatientList