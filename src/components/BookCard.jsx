import React from "react";

export const BookCard = (bookdata) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={bookdata.img}
          alt="BookCover"
        />
      </figure>
      <div className="card-body">
      <h2 className="card-title">{bookdata.title}</h2>
        <h3 >{`${bookdata.author}`}</h3>
        <p>{`Publicado por ${bookdata.publisher} - ${bookdata.publishedDate}`}</p>
        <p>{`AR$ ${bookdata.price}`}</p>
        <div className="card-actions justify-end">
          <a target="_blank" rel="noreferrer"href={bookdata.buyLink} className="btn btn-primary">COMPRAR</a>
        </div>
      </div>
    </div>
  );
};
