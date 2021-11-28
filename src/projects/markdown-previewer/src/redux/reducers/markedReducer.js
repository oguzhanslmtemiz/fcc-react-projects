import INITIAL_STATE from "../initialState";
import * as actionTypes from "../actions/actionTypes";

const markedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_CHANGE:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

export default markedReducer;
