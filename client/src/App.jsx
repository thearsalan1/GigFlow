import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectRoute";
import CreateGig from "./pages/CreateGig";
import GigBids from "./pages/GigBids";
import Navbar from "./components/Navbar";

const App = () => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/create" element={<CreateGig />} />
        <Route path="/gigs/:gigId/bids" element={<GigBids />} />
      </Routes>
    </>
  );
};

export default App;
