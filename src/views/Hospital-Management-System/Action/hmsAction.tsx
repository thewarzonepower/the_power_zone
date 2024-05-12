import snackBarUpdate from "../../../actions/snackBarActions";
import Prefix from "../../../config/ApiPrefix";
import AXIOS from "../../../config/Axios";
import SecureStorage from "../../../config/SecureStorage";
import { ACTIONS } from "../Interface/hmsType";


export const getPatientList = (body: string) => async (
    dispatch: Function
) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    try {
        const { data } = await AXIOS.get(`patients/${body?body:""}`, {
            headers: { Authorization: `Bearer ${SecureStorage.getItem("token")}` },
        });
        dispatch({ type: ACTIONS.GET_PATIENT_LIST, payload: data });
        snackBarUpdate({
            payload: {
                message: "Data Fetch Successfull",
                status: true,
                type: "success",
            },
        })(dispatch);
    } catch (err: any) {
        let title = "";

        if (err.response) {
           
           
            title = err.response.data.error;
        } else {
            title = "Something went wrong!";
        }
        snackBarUpdate({
            payload: {
                message: title || "Something went wrong",
                status: true,
                type: "error",
            },
        })(dispatch);
        dispatch({ type: ACTIONS.GET_PATIENT_LIST, payload: [] });
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
        throw err;
    }
};

export const createNewDiscrepancy = (body: any) => async (dispatch: Function) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_API_PATH}api/discrepancy/create`, body, {
            headers: { Authorization: `Bearer ${SecureStorage.getItem("token")}` },
        });
        dispatch({
            type: ACTIONS.CREATE_NEW_DISCREPANCY,
            payload: data,
        });
        snackBarUpdate({
            payload: {
                message: "Discrepancy Created Successfully",
                status: true,
                type: "success",
            },
        })(dispatch);
    } catch (err: any) {
        let title = "";
        if (err.response) {
           
            title = err.response.data.message===undefined?err.response.data.error: String(err.response.data.message);
        } else {
            title = "Something went wrong!";
        }
        snackBarUpdate({
            payload: {
                message: title || "Something went wrong",
                status: true,
                type: "error",
            },
        })(dispatch);
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
        throw err;
    }
};