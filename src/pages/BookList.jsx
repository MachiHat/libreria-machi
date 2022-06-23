import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { useAppContext } from "../context/AppContext";
import { addBook } from "../db/functions";
import { API_KEY } from "../data";

const BookList = () => {
  const {
    startSearch,
    setSearchParams,
    onCart,
    addCart,
    randomTitle,
    bookTitle,
    libData,
    setLibData,
  } = useAppContext();

  // BOOK SEARCH EFFECT AND STATE

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        bookTitle ?? randomTitle
      }&filter=paid-ebooks&langResttrict=es&printType=books&maxResults=10&key=${API_KEY}`
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

  // ADD BOOKS LOCALLY & SENDS TO FIRESTORE FUNCTION

  const addBookHandler = (bookdata) => {
    console.log("sending book to lib", bookdata);
    const newBook = {
      bookID: bookdata.id,
      author: bookdata.author,
      publishedDate: bookdata.publishedDate,
      publisher: bookdata.publisher,
      thumbnail: bookdata.thumbnail,
      title: bookdata.title,
      notes: "Sin notas...",
    };
    addBook(bookdata);
    setLibData([...libData, newBook]);
  };

  const isFav = (bookID) => {
    return libData.some((book) => book.bookID === bookID);
  };
  const isCart = (bookID) => {
    return onCart.some((book) => book.bookID === bookID);
  };

  return (
    <div>
      <SearchBar startSearch={startSearch} setSearchParams={setSearchParams} />
      <div className="mx-auto">
        {data.map((book, i) => (
          <BookCard
            key={i}
            id={book.id}
            thumbnail={book.volumeInfo?.imageLinks?.thumbnail}
            author={book.volumeInfo?.authors[0]}
            title={book.volumeInfo.title}
            publishedDate={book.volumeInfo.publishedDate}
            publisher={book.volumeInfo.publisher}
            price={book.saleInfo.listPrice?.amount}
            buyLink={book.saleInfo.buyLink}
            addCart={addCart}
            addBook={addBookHandler}
            isFav={isFav}
            isCart={isCart}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
