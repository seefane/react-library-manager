import React from "react";
import ReservedBook from "./Book/RersevedBook";
import "./Reserved.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservedbooks as fetchReservedBooks } from "../../redux/actions/reservedBook";
const ReservedBooks = () => {
  const dispatch = useDispatch();

  const user_reservedbooks = useSelector((state) => state.reservedbooks);
  const { books, loading, error } = user_reservedbooks;

  useEffect(() => {
    dispatch(fetchReservedBooks());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="row ">
        {loading ? (
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border" role="status"></div>
            </div>
          </div>
        ) : error ? (
          <div className="d-flex justify-content-center align-items-center">
            <h2>{error}</h2>
          </div>
        ) : (
          books.map((book) => (
            <ReservedBook
              key={book.id}
              title={book.title}
              imgUrl={book.book_cover}
              bookid={book.reserved_book}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ReservedBooks;
