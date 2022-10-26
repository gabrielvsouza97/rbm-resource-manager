import "./App.css";

import { Route, Routes } from "react-router";

import AuthContextProvider from "contexts/auth-context";
import ExamplePage from "pages/example-page";
import ExamplePage2 from "pages/example-page-2";
import ProtectedRoute from "hocs/protected-route";
import ThemeContext from "contexts/theme-context";
import useTheme from "hooks/useTheme";
import TesteGabriel from "pages/fortestonly/teste-gabriel";
import TesteAlessandra from "pages/fortestonly/teste-alessandra";
import TesteBruno from "pages/fortestonly/teste-bruno";
import TesteDavi from "pages/fortestonly/teste-davi";
import TesteEduardo from "pages/fortestonly/teste-eduardo";
import TesteVictor from "pages/fortestonly/teste-victor";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeContext theme={theme}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<ExamplePage />} />
          <Route path="/dashboard" element={<ExamplePage2 />} />
          <Route path="/gabriel" element={<TesteGabriel/>}/>
          <Route path="/alessandra" element={<TesteAlessandra/>}/>
          <Route path="/bruno" element={<TesteBruno/>}/>
          <Route path="/davi" element={<TesteDavi/>}/>
          <Route path="/eduardo" element={<TesteEduardo/>}/>
          <Route path="/victor" element={<TesteVictor/>}/>
        </Routes>
      </AuthContextProvider>
    </ThemeContext>
  );
}

export default App;
