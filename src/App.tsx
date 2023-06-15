import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Auth/PrivateRoute";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Four04 from "./Components/Four04";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="*" component={Four04} />
      </Switch>
    </Router>
  );
};

export default App;
