import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage.js";
import Login from "./components/Login.js";
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    // <HashRouter basename="/home">
    //   <div>
    //     <Route path="/login" component={LoginPage} />
    //     <Route path="/home" component={Home} />
    //   </div>
    // </HashRouter>
    <Homepage></Homepage>
  );
}

const Home = () => <Homepage></Homepage>;
const LoginPage = () => <Login></Login>;

export default App;
