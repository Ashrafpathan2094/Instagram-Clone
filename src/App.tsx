import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage";
import Authpage from "./pages/AuthPage/Authpage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Authpage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
