import * as actionTypes from "../constants/books";

export const BookReducer = (state = { books: [], loading: true }, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS_REQUEST:
      return {
        loading: true,
        books: [],
      };
    case actionTypes.GET_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
      };
    case actionTypes.GET_BOOKS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.RESERVE_BOOK:
      return {
        books: state.books.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};
