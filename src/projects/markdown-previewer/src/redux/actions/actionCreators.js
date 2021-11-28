import * as actionTypes from "./actionTypes";

export const handleChange = (text) => ({
  type: actionTypes.HANDLE_CHANGE,
  payload: text,
});
