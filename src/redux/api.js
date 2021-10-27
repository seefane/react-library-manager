import axios from "axios";

const authToken = process.env.REACT_APP_AUTH_TOKEN;
const url = "https://restlibrarymanager.herokuapp.com/";
const config = {
  headers: {
    Authorization: `Token ${authToken}`,
  },
};

export const fetchBooks = () => axios.get(url + "api/library/books/", config);
export const fetchReservedBooks = () =>
  axios.get(url + "api/library/user-reserved-books/", config);

export const reserveBook = (bookpk) =>
  axios.post(
    url + "api/library/reserve-book/" + bookpk + "/",
    {},
    {
      headers: {
        authorization: `Token ${authToken}`,
      },
    }
  );
export const returnBook = (bookpk) =>
  axios.put(
    url + `api/library/return-book/${bookpk}/`,
    {},
    {
      headers: {
        authorization: `Token ${authToken}`,
      },
    }
  );
