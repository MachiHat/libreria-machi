import React from "react";

const BookCard = ({ addBook, addCart, isFav, isCart, ...bookdata }) => {
  return (
    <div className="card card-compact card-side bg-base-100 shadow-xl max-w-3/4">
      <figure>
        <img className="" src={bookdata.img} alt="BookCover" />
      </figure>
      <div className="card-body max-w-3/4">
        <h2 className="card-title text-sm md:text-2xl">{bookdata.title}</h2>
        <h3 className="text-xs md:text-lg">{`${bookdata.author}`}</h3>
        <p className="text-xs md:text-base">{`Publicado por ${bookdata.publisher} - ${bookdata.publishedDate}`}</p>
        <p className="text-xs md:text-base">{`AR$ ${bookdata.price}`}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => addBook(bookdata)}
            className={`btn btn-secondary btn-sm ${isFav(bookdata.id) === true ? 'btn-disabled' : null} md:btn-md `}
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
            onClick={() => addCart(bookdata)}
            className={`btn btn-primary btn-sm ${isCart(bookdata.id) === true ? 'btn-disabled' : null} md:btn-md`}
          >
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
