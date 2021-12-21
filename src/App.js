import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Challenges from "./pages/Challenges";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/challenges' element={<Challenges />} />
      </Routes>
    </div>
  );
}

export default App;
