import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: true,
  errMess: "",
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.BOOKS_LOADING:
      return { ...state, isLoading: true, errMess: "", books: [] };

    case ActionTypes.BOOKS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        books: [],
      };

    case ActionTypes.BOOKS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: "",
        books: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
