import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage";
import Authpage from "./pages/AuthPage/Authpage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import useAuthStore from "./store/authStore";
function App() {
  const authUser = useAuthStore((state) => state.user);

  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authUser ? <Authpage /> : <Navigate to="/" />}
        />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
