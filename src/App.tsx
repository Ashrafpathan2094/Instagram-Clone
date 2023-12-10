import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage";
import Authpage from "./pages/AuthPage/Authpage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Authpage />} />
      </Routes>
    </>
  );
}

export default App;
