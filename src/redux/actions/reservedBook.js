import * as api from "../api";
import * as actionTypes from "../constants/reservedBooks";

export const getReservedbooks = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_RESERVEDBOOKS_REQUEST });

    const { data } = await api.fetchReservedBooks();

    dispatch({
      type: actionTypes.GET_RESERVEDBOOKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: actionTypes.GET_RESERVEDBOOKS_FAIL,
      payload: error.message,
    });
  }
};

export const returnBook = (bookid) => async (dispatch) => {
  try {
    await api.returnBook(bookid);
    dispatch({
      type: actionTypes.RETURN_BOOK,
      payload: bookid,
    });
  } catch (error) {
    console.error(bookid);
    dispatch({
      type: actionTypes.RETURN_BOOK_FAIL,
      payload: error.message,
    });
  }
};
