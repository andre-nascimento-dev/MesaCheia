import { Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Route from "./route";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Tables from "../pages/Tables";
import Profile from "../pages/Profile";

const Routes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/dashboard/tables" component={Tables} isPrivate />
        <Route path="/dashboard/profile" component={Profile} isPrivate />
        <Route path="*" component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
};
export default Routes;
