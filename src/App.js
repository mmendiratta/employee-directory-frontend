import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage.js";
import Login from "./components/Login.js";
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Route path="/login" component={LoginPage} />
        <Route exact path="/home" component={Home} />
      </div>
    </HashRouter>
  );
}

const Home = () => <Homepage></Homepage>;
const LoginPage = () => <Login></Login>;

export default App;
