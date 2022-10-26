import "./App.css";

import { Route, Routes } from "react-router";

import { BrowserRouter } from "react-router-dom";
import ExamplePage from "pages/example-page";
import ThemeContext from "contexts/theme-context";
import useTheme from "hooks/useTheme";
import TesteGabriel from "pages/fortestonly/teste-gabriel";
import TesteAlessandra from "pages/fortestonly/teste-alessandra";
import TesteBruno from "pages/fortestonly/teste-bruno";
import TesteDavi from "pages/fortestonly/teste-davi";
import TesteEduardo from "pages/fortestonly/teste-eduardo";
import TesteVictor from "pages/fortestonly/teste-victor";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeContext theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExamplePage />} />
          <Route path="/gabriel" element={<TesteGabriel/>}/>
          <Route path="/alessandra" element={<TesteAlessandra/>}/>
          <Route path="/bruno" element={<TesteBruno/>}/>
          <Route path="/davi" element={<TesteDavi/>}/>
          <Route path="/eduardo" element={<TesteEduardo/>}/>
          <Route path="/victor" element={<TesteVictor/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeContext> 
  );
}

export default App;
