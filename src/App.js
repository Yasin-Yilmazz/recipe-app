import AppRouter from "./router/AppRouter";
import theme from "./components/globalStyles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div>
      <AppRouter theme={theme} />
    </div>
  );
}

export default App;
