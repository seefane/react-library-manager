import React from "react";
import "./Reserved.css";
import { useDispatch } from "react-redux";
import { returnBook } from "../../../redux/actions/reservedBook";
import { Link } from "react-router-dom";

const ReservedBook = ({ title, imgUrl, bookid }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4 book-grid">
      <h5 className="text-center text-dark  ">{title} </h5>
      <div className="image ">
        <Link to="/reserved-books">
          <img src={imgUrl} className="img-fluid " alt="Dsd" />
          <div className="overlay">
            <div className="detail">
              <Link
                to="/reserved-books"
                className="btn borrow"
                onClick={() => dispatch(returnBook(bookid))}
              >
                Return Book
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ReservedBook;
