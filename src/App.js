import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offer" element={<Offers />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
