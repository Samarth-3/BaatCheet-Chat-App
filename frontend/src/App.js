import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/chats" element={<Chatpage />} />
      </Routes>
    </Router>
  );
}

export default App;
