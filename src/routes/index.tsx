import { Switch } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Route from "./route";
import NotFound from "../pages/NotFound";
import Tables from "../pages/tables";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/dashboard/tables" component={Tables} isPrivate />
      <Route path="/dashboard/profile" component={Profile} isPrivate />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
export default Routes;
