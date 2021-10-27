import React from "react";
import Book from "./Book/Book";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getbooks as fetchBooks } from "../../redux/actions/bookActions";

const Books = () => {
  const dispatch = useDispatch();

  const librarybooks = useSelector((state) => state.books);
  const { books, loading, error } = librarybooks;

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="album py-5 ">
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
              <Book
                key={book.id}
                title={book.title}
                description={book.description}
                qty={book.available_quantity}
                author={book.author}
                book_cover={book.book_cover}
                bookid={book.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
