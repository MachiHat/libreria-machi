import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import  BookCard  from "../components/BookCard";
import { useAppContext } from "../context/AppContext";
import { addBookToLib } from "../data/functions";
import { API_KEY } from "../data";

const BookList = () => {
  const { startSearch, setSearchParams, onCart, addCart, randomTitle, bookTitle, libData, setLibData} = useAppContext();

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

    const addBook = (bookdata) => {
      const newBook = {
        _id: bookdata.id,
        author: bookdata.author,
        publishedDate: bookdata.publishedDate,
        publisher: bookdata.publisher,
        thumbnail: bookdata.img,
        title: bookdata.title,
        notes: "Sin notas...",
      };
      addBookToLib(newBook);
      setLibData([ ...libData, newBook ]);
    };

    const isFav = (bookID) => {
      return libData.some((book) => book._id === bookID);
    };
    console.log(onCart)
    const isCart = (bookID) => {
      return onCart.some((book) => book.id === bookID)
    };

  return (
    <div>
      <SearchBar 
        startSearch={startSearch}
        setSearchParams={setSearchParams}
      />
      <div className="mx-auto">
        {data.map((book, i) => (
          <BookCard
            key={i}
            id={book.id}
            img={book.volumeInfo?.imageLinks?.thumbnail}
            author={book.volumeInfo?.authors}
            title={book.volumeInfo.title}
            publishedDate={book.volumeInfo.publishedDate}
            publisher={book.volumeInfo.publisher}
            price={book.saleInfo.listPrice?.amount}
            buyLink={book.saleInfo.buyLink}
            addCart={addCart}
            addBook={addBook}
            isFav={isFav}
            isCart={isCart}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;