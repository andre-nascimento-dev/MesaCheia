import { Switch } from "react-router";
import Home from "../pages/Home";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
export default Routes;
