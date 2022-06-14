import { useState, useEffect, createContext, useContext } from "react";
import { API_KEY } from "../data";

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

  // Library data

  const [libData, setLibData] = useState([]);

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
        data,
        startSearch,
        setSearchParams,
        bookTitle,
        randomTitle,
        addCart,
        onCart,
        cartCount,
        clearCart,
        cartTotal,
        libData,
        setLibData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
