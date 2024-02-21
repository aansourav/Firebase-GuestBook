import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Reset from "./page/Reset";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/reset' element={<Reset />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
