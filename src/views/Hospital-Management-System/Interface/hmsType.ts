export const ACTIONS = {
    SET_LOADING: "hms/set_loading",
    GET_PATIENT_LIST:"hms/get_patients_list",
    ADMIT_NEW_PATIENT:"hms/admit_new_patient"
}

interface SetLoading {
    type: typeof ACTIONS.SET_LOADING;
    payload:boolean
}
interface GetPatientList {
    type: typeof ACTIONS.GET_PATIENT_LIST;
    payload: Array<string | number>
}
interface AdmitNewPatient {
    type: typeof ACTIONS.ADMIT_NEW_PATIENT;
    payload: Array<string | number>
}

export type HMSUserType = 
| SetLoading
| GetPatientList
| AdmitNewPatient