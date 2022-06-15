import React, { useState } from "react";
import BookLib from "../components/BookLib";
import EditNote from "../components/EditNote";

import { useAppContext } from "../context/AppContext";

import {
  deleteBookFromLib,
  editNoteFromLib,
} from "../data/functions";

const Library = () => {

  const {libData, setLibData} = useAppContext();

  const filterBooks = (bookID) => {
    deleteBookFromLib(bookID);
    const filteredBooks = libData.filter((book) => book.id !== bookID);
    setLibData(filteredBooks);
  };

  // note editing stuff here

  const [selectedBook, setSelectedBook] = useState();

  const selectBook = (bookID) => {
    console.log("Selecting book with id: " + bookID);
    setSelectedBook(bookID);
  };

  const sendNote = (newNote) => {
    console.log("Sending note to book: " + selectedBook);
    editNoteFromLib(newNote, selectedBook);
      const newBookNote = libData.map((book) => {
        if (book.id === selectedBook) {
          return { ...book, notes: newNote };
        } return book;
      });
    setLibData(newBookNote);
  };

  return (
    <div className="mx-auto">
      {libData.map((book, i) => (
        <BookLib
          key={i}
          id={book.id}
          img={book.thumbnail}
          author={book.author}
          title={book.title}
          publishedDate={book.publishedDate}
          publisher={book.publisher}
          notes={book.notes}
          deleteBook={filterBooks}
          selectBook={selectBook}
        />
      ))}
      <EditNote sendNote={sendNote} />
    </div>
  );
};

export default Library;
