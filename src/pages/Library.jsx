import React, { useState } from "react";
import BookLib from "../components/BookLib";
import EditNote from "../components/EditNote";

import { useAppContext } from "../context/AppContext";

import {
  deleteBook,
  editNote,
} from "../db/functions";

const Library = () => {

  const {libData, setLibData} = useAppContext();

  // delete that book

  const filterBooks = (libID) => {
    deleteBook(libID);
    const filteredBooks = libData.filter((book) => book.libID !== libID);
    setLibData(filteredBooks);
  };

  // note editing stuff here

  const [selectedBook, setSelectedBook] = useState();

  const selectBook = (libID) => {
    console.log("Selecting book with id: " + libID);
    setSelectedBook(libID);
  };

  const sendNote = (newNote) => {
    console.log("Sending note to book: " + selectedBook);
    editNote(newNote, selectedBook);
      const newBookNote = libData.map((book) => {
        if (book.libID === selectedBook) {
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
          book={book}
          deleteBook={filterBooks}
          selectBook={selectBook}
        />
      ))}
      <EditNote sendNote={sendNote} />
    </div>
  );
};

export default Library;
