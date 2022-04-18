import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { BookList } from "./pages/BookList";
import { TopNav } from "./components/TopNav";

const App = () => {

  return (
      <Router>
        <TopNav />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          {/* <Route exact path="/buy" element={<BuyForm />} /> */}
        </Routes>
      </Router>
  );
};

export default App;
