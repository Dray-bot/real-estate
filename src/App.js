import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularListings from "./components/PopularListings";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PropertyList from "./pages/PropertyList";
import PropertyDetails from "./pages/PropertyDetails";
import AddProperty from "./components/AddProperty";
import AgentDashboard from "./pages/AgentDashboard";
import UserDashboard from "./pages/UserDashboard";
import Footer from "./components/Footer";

// 🔒 Optional: If `ProtectedRoute` exists, uncomment this
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PopularListings />
              <WhyChooseUs />
              <Testimonials />
              <CallToAction />
            </>
          }
        />

        {/* 🔑 Authentication Pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* 🏡 Property Pages */}
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/add-property" element={<AddProperty />} />

        {/* 📌 Dashboard Pages (Temporarily removed ProtectedRoute for debugging) */}
        <Route path="/agent-dashboard" element={<AgentDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
