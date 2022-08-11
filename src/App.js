import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import ErrorIndex from "./pages/Error/ErrorIndex";
import FixturesIndex from "./pages/Fixtures/FixturesIndex";
import HomeIndex from "./pages/Home/HomeIndex";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"],
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/fixtures" element={<FixturesIndex />} />
        <Route path="/error" element={<ErrorIndex />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
