// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from './Pages/HomePage';
// import Chatpage from './Pages/Chatpage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<HomePage />} />
//         <Route exact path="/chats" element={<Chatpage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//above code is for latest version of react but i am using react@17 so i have to use below code



import "./App.css";
import Homepage from "./Pages/HomePage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;