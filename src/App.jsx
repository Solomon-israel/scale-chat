import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/Forgotpassword";
import Onboarding from "./pages/Onboarding";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}
