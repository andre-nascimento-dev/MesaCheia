import { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/style";
import { ToastAnimated } from "./components/Toast";
import SplashScren from "./components/SplashScreen";
import Routes from "./routes";

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastAnimated />
      {loading ? <SplashScren /> : <Routes />}
    </ThemeProvider>
  );
};

export default App;
