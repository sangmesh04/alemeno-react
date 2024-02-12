import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Navbar from "./components/navbar";
import Courses from "./pages/courses/course";
import CourseDetails from "./pages/courses/courseDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course/detail/:id" element={<CourseDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
