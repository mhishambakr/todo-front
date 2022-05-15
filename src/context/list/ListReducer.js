import { GET_LIST } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_LIST:
        console.log(action.payload)
      return {
        ...state,
        list: action.payload.Items,
      };
    default:
      return;
  }
};
