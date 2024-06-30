import "./StudentsDashboard.css";
import Home from "./Sidebar/Home/Home";
import Recent from "./Sidebar/Recent/Recent";
import Classes from "./Sidebar/Classes/Classes";
import Library from "./Sidebar/Library/Library";
import Teachers from "./Sidebar/Teachers/Teachers";
import Worked from "./Sidebar/Home/Worked/Worked";
import Viewed from "./Sidebar/Home/Viewed/Viewed";
import { Outlet, Route, Routes } from "react-router-dom";

function StudentsDashboard() {
  return (
    <div className="student-dash">
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />}>
          <Route index element={<Worked />} />
          <Route path="worked" element={<Worked />} />
          <Route path="Viewed" element={<Viewed />} />
        </Route>
        <Route path="recent" element={<Recent />} />
        <Route path="classes" element={<Classes />} />
        <Route path="library" element={<Library />} />
        <Route path="teachers" element={<Teachers />} />
      </Routes>
      <Outlet />
    </div>
  );
}
export default StudentsDashboard;
