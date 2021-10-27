import * as actionTypes from "../constants/reservedBooks";

export const ReservedBookReducer = (
  state = { books: [], loading: true },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_RESERVEDBOOKS_REQUEST:
      return {
        loading: true,
        books: [],
      };
    case actionTypes.GET_RESERVEDBOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
      };
    case actionTypes.GET_RESERVEDBOOKS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.RETURN_BOOK:
      console.log(state.books);
      return {
        books: state.books.filter(
          (book) => book.reserved_book !== action.payload
        ),
      };

    default:
      return state;
  }
};
