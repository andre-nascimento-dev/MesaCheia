import { GlobalStyle } from "./styles/style";
import Routes from "./routes";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
