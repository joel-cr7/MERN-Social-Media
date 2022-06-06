import Home from "./pages/home/Home";
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";
import Profile from "../src/pages/profile/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

  // we can access user anywhere as it is in out store
  const {user} = useContext(AuthContext);

  return (
    <Router>
      <Switch>

        <Route exact path="/" >
          { user ? <Home /> : <Register /> }
        </Route>

        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>

        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>

        <Route path="/profile/:username">
          <Profile />
        </Route>
  
      </Switch>
    </Router>
  );
}

export default App;
