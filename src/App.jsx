import Container from "./layout/Container";
import Intro from "./pages/Intro";
import { Routes, Route } from "react-router-dom";
import HillClimbing from "./pages/HillClimbing";
import Guidance from "./pages/Guidance";
function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/hill-climbing" element={<HillClimbing />} />
        <Route path="/guidance" element={<Guidance />} />
      </Routes>
    </Container>
  );
}

export default App;
