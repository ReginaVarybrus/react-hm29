import "./App.css";

import HomePage from "./pages/HomePage";
import HttpHeroComponent from "./pages/HeroComponent";
import EpisodesComponent from "./pages/EpisodesComponent";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// const theme = createTheme({
//   palette: {
//       common: {
//           black: '#002884'
//       },
//       primary: {
//         light: '#757ce8',
//         main: '#3f50b5',
//         dark: '#002884',
//         contrastText: '#fff',
//       },
//       secondary: {
//         light: '#ff7961',
//         main: '#f44336',
//         dark: '#ba000d',
//         contrastText: '#000',
//       },
//   }
// });

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/heroes" element={<HttpHeroComponent />} />
            <Route path="/episodes" element={<EpisodesComponent />} />
          </Routes>
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;



