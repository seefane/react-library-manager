import "./App.css";
import AvailableBooks from "./components/Books/AvailableBooks";
import ReservedBooks from "./components/Books/ReservedBooks";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={AvailableBooks} />
        <Route exact path="/reserved-books" component={ReservedBooks} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
