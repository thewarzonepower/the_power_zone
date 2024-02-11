import { createAction } from '@reduxjs/toolkit';

// Define action types
export const ACTIONS = {
  CHANGE_PASSWORD: "change_password",
  STATUS: 'snackBar/status',
};

// Create action creators
export const changePassword = createAction<string>(ACTIONS.CHANGE_PASSWORD);
export const updateSnackBarStatus = createAction<object>(ACTIONS.STATUS);

// Thunk action creator
export const snackBarUpdate = (value: object) => {
  return (dispatch: Function) => {
    dispatch(updateSnackBarStatus(value));
  };
};