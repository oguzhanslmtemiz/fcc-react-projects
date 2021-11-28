import INITIAL_STATE from "../initialState";
import * as actionTypes from "../actions/actionTypes";

const quotesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUOTES:
      return { ...state, quotes: action.payload, isFetching: false };
    case actionTypes.NEW_QUOTE:
      return { ...state, randomIndex: action.payload };
    default:
      return state;
  }
};

export default quotesReducer;
