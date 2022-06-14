import React from "react";
import { SearchBar } from "../components/SearchBar";
import  BookCard  from "../components/BookCard";
import { useAppContext } from "../context/AppContext";
import { addBookToLib } from "../data/functions";

const BookList = () => {
  const { startSearch, setSearchParams, data, addCart } = useAppContext();

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
            addBook={addBookToLib}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;