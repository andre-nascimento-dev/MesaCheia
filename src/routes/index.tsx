import { Switch } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Route from "./route";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
export default Routes;
