import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "../components/BookCard";
import { API_KEY } from "../data";

export const BookList = ( searchParams ) => {

  console.log(searchParams);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchParams}&filter=paid-ebooks&langResttrict=es&printType=books&maxResults=5&key=${API_KEY}`
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
  }, [searchParams]);

  return (
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
  );
};
