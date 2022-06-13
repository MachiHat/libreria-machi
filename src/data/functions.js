import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firestore";

// FIREBASE FUNCTIONS

const collectionRef = collection(db, "libreria");

// getting books from lib

export const getLibrary = async () => {
  const snapshot = await getDocs(collectionRef);
  const docs = snapshot.docs;
  const docsArray = [];
  docs.forEach((doc) => docsArray.push({ id: doc.id, ...doc.data() }));
  return docsArray;
};

// add books to lib

export const addBookToLib = async (bookdata) => {
  const newData = {
    author: bookdata.author,
    publishedDate: bookdata.publishedDate,
    publisher: bookdata.publisher,
    thumbnail: bookdata.img,
    title: bookdata.title,
    notes: "Sin notas...",
  };
  const docRef = doc(collectionRef);
  await setDoc(docRef, newData);
};

// edit selected book from lib

export const editNoteFromLib = async (note, docID) => {
  const docRef = doc(db, "libreria", docID);
  await updateDoc(docRef, {
    notes: note,
  });
};

// delete selected book

export const deleteBookFromLib = async (docID) => {
  const docRef = doc(db, "libreria", docID);
  await deleteDoc(docRef);
};
