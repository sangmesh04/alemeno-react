import CourseNav from "./courseNav.js";
import CourseNavItem from "./courseNavItem.js";
import CourseList from "./courseList.js";
import CourseListItem from "./courseListItem.js";
import { CoursesData } from "../../db/courses.js";
import { useState } from "react";

export default function Courses() {
  const [searchQuery, setSeachQuery] = useState("");
  return (
    <div className="divide-y divide-slate-100">
      <CourseNav>
        <CourseNavItem href="#" isActive>
          New Releases
        </CourseNavItem>
        <CourseNavItem href="#">Top Rated</CourseNavItem>
        <CourseNavItem href="#">Trending Courses</CourseNavItem>
      </CourseNav>
      <form
        class="group relative searchBar"
        style={{ margin: "15px auto", width: "48%" }}
      >
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Search courses"
          placeholder="Search courses..."
          onChange={(e) => setSeachQuery(e.target.value)}
        />
      </form>
      <CourseList>
        {CoursesData.filter(
          (course) =>
            course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((course) => (
          <CourseListItem key={course.id} course={course} />
        ))}
      </CourseList>
    </div>
  );
}
