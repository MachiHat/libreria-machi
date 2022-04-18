import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { SearchBar } from "./pages/SearchBar";
import { BookList } from "./pages/BookList";
import { TopNav } from "./components/TopNav";
import AppContextProvider from "./context/AppContext";

const App = () => {

  return (
    <AppContextProvider>
      <Router>
        <TopNav />
        <Routes>
          <Route exact path="/" element={<SearchBar />} />
          <Route exact path="/lib" element={<BookList />} />
          {/* <Route exact path="/buy" element={<BuyForm />} /> */}
        </Routes>
      </Router>
    </AppContextProvider>
  );
};

export default App;
