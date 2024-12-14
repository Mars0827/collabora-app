import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import About from "./pages/LoginPage";
import Contact from "./pages/RegisterPage";
import Chatroom from "./pages/ChatroomPage";

const App = () => {
  const location = useLocation(); // Get the current route

  const hideFooterRoutes = ["/chatroom"]; // Routes where the footer should be hidden
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="bg-black h-full">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<About />} />
          <Route path="/register" element={<Contact />} />
          <Route path="/chatroom" element={<Chatroom />} />
        </Routes>
      </main>
      {!shouldHideFooter && <Footer />} {/* Conditionally render the footer */}
    </div>
  );
};

// this is for hiding the footer when the user is in the chatroom page
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
