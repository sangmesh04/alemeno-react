import { StarIcon } from "@heroicons/react/20/solid";
import { CoursesData } from "../../db/courses";
import { useParams } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CourseDetails() {
  const params = useParams();
  const course = CoursesData[params.id - 1];
  const [syllabusHidden, setSyllabusHidden] = useState(true);

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={course.thumbnail}
              //   alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {course.name}{" "}
              <span className="inline-flex items-center mx-1 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {course.location}
              </span>
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ₹ {1000 + Math.round(Math.random() * 10000)}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        Math.round(course.rating) > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{course.rating} out of 5 stars</p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {Math.round(Math.random() * 1000)} reviews
                </a>
              </div>
            </div>

            <div className="mt-10">
              {course.enrollmentStatus === "Open" ? (
                <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Enroll now!
                </button>
              ) : course.enrollmentStatus === "Closed" ? (
                <button
                  disabled
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Course completed! 🎉
                </button>
              ) : (
                <>
                  <span className="text-gray-500">Learning in progress...</span>
                  <div class="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-yellow-600 h-2.5 rounded-full"
                      style={{ width: `${Math.round(Math.random() * 100)}%` }}
                    ></div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{course.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">
                Course duration
              </h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                    {course.schedule}
                  </span>
                  <span className="inline-flex items-center mx-1 rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-700/10">
                    {course.duration}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">
                Course enrollment status
              </h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  <span className="inline-flex items-center mx-1 rounded-md bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-700/10">
                    {course.enrollmentStatus}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">
                Prerequisites
              </h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {course.prerequisites.map((item) => (
                    <>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                        {item}
                      </span>
                    </>
                  ))}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div
                className="flex w-100 hover:bg-gray-100 p-2 hover:cursor-pointer"
                style={{ justifyContent: "space-between" }}
                onClick={() => setSyllabusHidden(!syllabusHidden)}
              >
                <h3 className="text-sm font-medium text-gray-900">Syllabus</h3>{" "}
                <span>
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="mt-4" hidden={syllabusHidden}>
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {course.syllabus.map((item, key) => (
                    <li key={key} className="text-gray-400">
                      <span className="text-gray-600">
                        Week {item.week} - {item.topic}
                      </span>
                      <br />
                      <span>{item.content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Instructor</h3>
              <div className="mt-4">
                <ul role="list" className="list-none space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">{course.instructor}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
