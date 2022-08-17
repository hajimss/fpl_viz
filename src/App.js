import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import ErrorIndex from "./pages/Error/ErrorIndex";
import FixturesIndex from "./pages/Fixtures/FixturesIndex";
import HomeIndex from "./pages/Home/HomeIndex";
import StatsIndex from "./pages/Stats/StatsIndex";
import LinkModal from "./utils/components/LinkModal";

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
        <Route path="/stats" element={<StatsIndex />} />
      </Routes>
      <LinkModal />
    </ThemeProvider>
  );
}

export default App;
