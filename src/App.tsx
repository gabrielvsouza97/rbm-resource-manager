import "./App.css";

import { Route, Routes } from "react-router";

import AuthContextProvider from "contexts/auth-context";
import ExamplePage from "pages/example-page";
import ExamplePage2 from "pages/example-page-2";
import ProtectedRoute from "hocs/protected-route";
import ThemeContext from "contexts/theme-context";
import useTheme from "hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeContext theme={theme}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<ExamplePage />} />
          <Route path="/dashboard" element={<ExamplePage2 />} />
        </Routes>
      </AuthContextProvider>
    </ThemeContext>
  );
}

export default App;
