// import { createStore, Store } from "redux";
import {INCREMENT_COUNTER, DECREMENT_COUNTER} from "../type";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state
  }
};
// const store=createStore(reducer);

export default reducer;