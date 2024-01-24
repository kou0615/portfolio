import "./App.css";
import BrogPage from "./BrogPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BrogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
