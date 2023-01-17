import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="notes" element={<Notes />} />
          <Route path="main" element={<Main />} />
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
