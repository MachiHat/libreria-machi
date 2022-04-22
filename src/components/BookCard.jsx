import React from "react";

const BookCard = ({ addCart, ...bookdata }) => {
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
            onClick={() => addCart(bookdata)}
            className="btn btn-primary btn-sm md:btn-md"
          >
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
