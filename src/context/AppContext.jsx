import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { config } from "../db";

const AppContext = createContext([]);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  // DEFAULT TITLES RANDOMIZER

  const bookTitles = [
    "El Principito",
    "El Retrato de Dorian Gray",
    "Farenheit 451",
    "Cien Años de Soledad",
    "Romancero Gitano",
  ];
  const [randomTitle] = useState(
    bookTitles[Math.floor(Math.random() * bookTitles.length)]
  );

  const [searchParams, setSearchParams] = useState(); // SEARCHBAR STATE

  const [bookTitle, setBookTitle] = useState(); // USESTATE SEARCH

  //SEARCH BUTTON FUNCTION

  const startSearch = (e) => {
    e.preventDefault();
    setBookTitle(searchParams);
    e.target.reset();
  };

  // LIBRARY DATA

  const [libData, setLibData] = useState([]);

  useEffect(() => {
    axios({
      url: config.url,
      method: "GET",
      headers: config.headers,
    })
      .then((response) => {
        const pushArray = [];
        response.data.data.forEach((data) => {
          const newData = {
            libID: data.id,
            bookID: data.tax_id,
            publisher: data.first_name,
            publishedDate: data.last_name,
            author: data.email,
            thumbnail: data.json_data?.replace(/['"]+/g, ''),
            title: data.name,
            notes: data.description,
          };
          pushArray.push(newData);
        });
        setLibData(pushArray);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.error(error.response.headers);
          console.error(error.response.data);
          console.error(error.response.status);
        }
      });
  }, []);

  // CART FUNCTIONS & STATES

  const [onCart, setOnCart] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  const cartCount = onCart.length;

  const addCart = (bookcard) => {
    setOnCart([...onCart, bookcard]);
    setCartTotal(cartTotal + bookcard.price);
  };

  const clearCart = () => {
    console.log("cartCleared");
    setOnCart([]);
    setCartTotal(0);
  };

  return (
    <AppContext.Provider
      value={{
        randomTitle,
        bookTitle,
        startSearch,
        setSearchParams,
        libData,
        setLibData,
        addCart,
        onCart,
        cartCount,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
