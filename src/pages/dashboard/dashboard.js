import { Link } from "react-router-dom";
import { CoursesData } from "../../db/courses";
import MarkAsCompleteAlert from "./markcompleteAlert";
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">
            Student dashboard
          </h1>
        </div>
      </header> */}
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <h1
            className="text-3xl font-bold text-gray-700"
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 700,
              lineHeight: 1.25,
              fontSize: "2.4rem",
              letterSpacing: "-.016rem",
            }}
          >
            Let's start learning, Deepak!
          </h1>
        </div>
        <div
          className="pendingCourses"
          style={{
            margin: "25px auto",
            width: "70%",
            overflowX: "scroll",
            display: "flex",
          }}
        >
          {CoursesData.map((course) =>
            course.enrollmentStatus === "In Progress" ? (
              <article className="flex items-start space-x-6 p-6">
                <img
                  src={course.thumbnail}
                  alt=""
                  width="60"
                  height="88"
                  className="flex-none rounded-md bg-slate-100"
                />
                <div className="min-w-0 relative flex-auto">
                  <Link to={`/course/detail/${course.id}`}>
                    <h2 className="font-semibold text-slate-900 truncate pr-20">
                      {course.name}
                    </h2>
                  </Link>
                  <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                    <div className="absolute top-0 right-0 flex items-center space-x-1">
                      <dt className="text-sky-500">
                        <span className="sr-only">Star rating</span>
                        <svg width="16" height="20" fill="currentColor">
                          <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                        </svg>
                      </dt>
                      <dd>{course.rating}</dd>
                    </div>

                    <div class="w-full mt-2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-400">
                      <div
                        class="bg-red-400 h-1.5 rounded-full"
                        style={{ width: `${Math.round(Math.random() * 100)}%` }}
                      ></div>
                    </div>

                    <div className="flex-none w-full mt-2 font-normal">
                      <dt className="sr-only">Instructor</dt>
                      <dd className="text-slate-400">{course.instructor}</dd>
                    </div>

                    <div className="flex flew-wrap w-full mt-2 font-normal">
                      <div>
                        <dt className="sr-only">Schedule</dt>
                        <span
                          onClick={() => setOpen(true)}
                          className="inline-flex items-center hover:cursor-pointer hover:bg-gray-200 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10"
                        >
                          <dd>Mark as completed</dd>
                        </span>
                      </div>
                    </div>
                  </dl>
                </div>
              </article>
            ) : (
              ""
            )
          )}
        </div>
        <MarkAsCompleteAlert open={open} setOpen={setOpen} />
      </main>
    </>
  );
};

export default Dashboard;
