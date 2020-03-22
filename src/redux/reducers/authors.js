import { SET_AUTHORS } from "../actions/actionTypes";

const initialState = {
  authors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      const authors = action.payload;
      return {
        ...state,
        authors,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
