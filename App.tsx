import { ThemeProvider } from "styled-components";
import { SignIn } from "./src/Screens/SignIn";
import theme from "./src/theme";

export default function App() {
  <ThemeProvider theme={theme}>
    <SignIn />
  </ThemeProvider>;
}
