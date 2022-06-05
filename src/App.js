import Home from "./pages/home/Home";
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";
import Profile from "../src/pages/profile/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/profile/:username">
          <Profile />
        </Route>
  
      </Switch>
    </Router>
  );
}

export default App;
