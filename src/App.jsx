import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const navigate = (newPage) => {
    setPage(newPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openCourse = (course) => {
    if (!course) return;

    setSelectedCourse(course);
    setPage("course-details");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <LoadingScreen
        onComplete={() => setLoading(false)}
      />
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Navbar
        page={page}
        navigate={navigate}
      />

      {page === "home" && (
        <Home
          navigate={navigate}
          openCourse={openCourse}
        />
      )}

      {page === "courses" && (
        <Courses
          navigate={navigate}
          openCourse={openCourse}
        />
      )}

      {page === "course-details" && (
        <CourseDetails
          course={selectedCourse}
          navigate={navigate}
        />
      )}

      {page === "register" && (
        <Register navigate={navigate} />
      )}

      {page === "login" && (
        <Login navigate={navigate} />
      )}

      {page === "dashboard" && (
        <Dashboard navigate={navigate} />
      )}

      {page === "forgot-password" && (
        <ForgotPassword navigate={navigate} />
      )}

      {(page === "home" || page === "courses") && (
        <Footer navigate={navigate} />
      )}
    </div>
  );
}