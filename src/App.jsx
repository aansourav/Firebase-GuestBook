import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Reset from "./page/Reset";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path='/home' element={<Home />}/>
            <Route path='/' element={<Home />} exact />
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/reset' element={<Reset />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
