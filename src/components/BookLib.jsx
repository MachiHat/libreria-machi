import React from "react";
import { BsPencil } from "react-icons/bs";

const BookLib = ({ selectBook, deleteBook, ...bookdata }) => {
  return (
    <div className="card card-compact card-side bg-base-100 shadow-xl max-w-3/4">
      <figure>
        <img className="" src={bookdata.img} alt="BookCover" />
      </figure>
      <div className="card-body max-w-3/4">
        <h2 className="card-title text-sm md:text-2xl">{bookdata.title}</h2>
        <h3 className="text-xs md:text-lg">{`${bookdata.author}`}</h3>
        <p className="text-xs md:text-base">{`Publicado por ${bookdata.publisher} - ${bookdata.publishedDate}`}</p>
        <div className="input-group">
          <p className="text-xs w-1/2 md:text-base">{bookdata.notes}</p>
        </div>
        <div className="card-actions justify-end">
          <label
            htmlFor="edit-modal"
            onClick={() => selectBook(bookdata.id)}
            className="btn btn-secondary btn-circle text-lg"
          >
            <BsPencil />
          </label>
          <button
            onClick={() => deleteBook(bookdata.id)}
            className="btn btn-danger btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookLib;
