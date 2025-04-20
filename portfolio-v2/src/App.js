import Game from './pages/Game';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="exploration" element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
