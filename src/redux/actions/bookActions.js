import * as api from "../api";
import * as actionTypes from "../constants/books";

export const getbooks = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_BOOKS_REQUEST });

    const { data } = await api.fetchBooks();

    dispatch({
      type: actionTypes.GET_BOOKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: actionTypes.GET_BOOKS_FAIL,
      payload: error.message,
    });
  }
};

export const reserveBook = (bookid) => async (dispatch) => {
  try {
    await api.reserveBook(bookid);
    dispatch({ type: actionTypes.RESERVE_BOOK, payload: bookid });
  } catch (error) {
    console.log(error.message);
  }
};
