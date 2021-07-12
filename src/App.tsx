import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/style";
import { ToastAnimated } from "./components/Toast";
import Routes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastAnimated />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
