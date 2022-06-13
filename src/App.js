import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import BookList  from "./pages/BookList";
import Library from "./pages/Library";
import CartForm from "./pages/CartForm";
import { TopNav } from "./components/TopNav";
import  AppContextProvider  from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <TopNav />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route exact path="/lib" element={<Library />} />
          <Route exact path="/buy" element={<CartForm />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
};

export default App;