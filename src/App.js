import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./ConfigureStore/store";
import Home from "./Home/Home";

const baseURL = "http://localhost:5500/api";
axios.defaults.baseURL = baseURL;
//axios.defaults.headers.post["Content-Type"]="multipart/form-data";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Access-Control-Allow-Header"] =
  "Origin, X-Requested-with, Content-Type, Accept";
axios.defaults.headers.post["Access-Control-Allow-Methods"] =
  "GET,HEAD,POST,PUT,PATCH,DELETE";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <nav className="Nav">
          <Router>
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Router>
        </nav>
      </div>
    </Provider>
  );
}

export default App;
