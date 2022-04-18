import React from "react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { BookCard } from "../components/BookCard";
import { API_KEY } from "../data";

export const BookList = () => {
  const bookTitles = [
    "El Principito",
    "El Retrato de Dorian Gray",
    "Farenheit 451",
    "100 Años de Soledad",
    "Romancero Gitano",
  ];
  
  const [searchParams, setSearchParams] = useState();
  
  const [bookTitle, setBookTitle] = useState();

  const [ randomTitle ] = useState(bookTitles[Math.floor(Math.random()*bookTitles.length)]);
  
  const startSearch = (e) => {
    e.preventDefault();
    setBookTitle(searchParams);
    e.target.reset();
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        bookTitle ?? randomTitle
      }&filter=paid-ebooks&langResttrict=es&printType=books&maxResults=5&key=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [bookTitle, randomTitle]);

  return (
    <div>
      <form onSubmit={startSearch} className="form-control">
        <div className="input-group">
          <input
            onChange={e => setSearchParams(e.target.value)}
            type="text"
            placeholder="Buscar..."
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button type='submit' className="btn btn-square btn-primary">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
      <div>
        {data.map((book, i) => (
          <BookCard
            key={i}
            img={book.volumeInfo?.imageLinks?.thumbnail}
            author={book.volumeInfo?.authors[0]}
            title={book.volumeInfo.title}
            publishedDate={book.volumeInfo.publishedDate}
            publisher={book.volumeInfo.publisher}
            price={book.saleInfo.listPrice.amount}
            buyLink={book.saleInfo.buyLink}
          />
        ))}
      </div>
    </div>
  );
};
