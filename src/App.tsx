import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import { auth } from "./firebase/firebase";
import Authpage from "./pages/AuthPage/Authpage";
import HomePage from "./pages/HomePage/Homepage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
function App() {
  const [authUser] = useAuthState(auth);

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
        <Route path="/:userName" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
