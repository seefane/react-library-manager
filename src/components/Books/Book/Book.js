import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reserveBook } from "../../../redux/actions/bookActions";

const Book = ({ title, author, description, qty, book_cover, bookid }) => {
  const dispatch = useDispatch();

  const reserveSelectedBook = () => {
    dispatch(reserveBook(bookid));
  };
  return (
    <div className="col-md-4 book-grid">
      <h5 className="text-center text-dark">{title} </h5>
      <div className="image">
        <Link to="/#">
          <img src={book_cover} className="img-fluid" alt="Dsd" />
          <div className="overlay">
            <div className="detail">View Details</div>
          </div>
        </Link>
      </div>
      <h5 className="">Author: {author}</h5>
      <h5 className="">Available: {qty} </h5>
      <p className=" text-dark  text-truncate">{description}</p>

      <Link
        to="/#"
        className="btn borrow"
        onClick={() => dispatch(reserveSelectedBook)}
      >
        Borrow
      </Link>
    </div>
  );
};

export default Book;
