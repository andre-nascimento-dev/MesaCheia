import { GlobalStyle } from "./styles/style";
import Routes from "./routes";
import Loader from "./components/Loader";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <Loader/>
    </>
  );
};

export default App;
