import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const theme = createTheme();
export default function SnackBar() {
  const dispatch = useDispatch();
  const { status, message, type } = useSelector((state: any) => state.snackBarReducer);
  const ACTIONS = {CHANGE_PASSWORD: "change_password",STATUS: 'snackBar/status',};
  const handleClose = () => {
    dispatch({ type: ACTIONS.STATUS, payload: {
      message: "",
      status: false,
      type: ""
    } });
  };
  return (
    <div >
      <Snackbar open={status} autoHideDuration={1500} onClose={handleClose}>
         <Alert onClose={handleClose}  severity={type || "info"} sx={{ width: '100%' }}>
         {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
