import { Switch } from "react-router";
import Route from "./route";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound}/>
    </Switch>
  );
};
export default Routes;
