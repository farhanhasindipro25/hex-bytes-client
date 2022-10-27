import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const LeftNav = () => {
  const courses = useLoaderData();
  return (
    <div className="mt-5 bg-dark p-3 rounded-4">
      {courses.map((course) => (
        <p
          key={course.course_id}
          className="bg-warning px-1 py-2 rounded-2 my-1 text-center"
        >
          <Link
            to={`/courses/${courses.id}`}
            className="text-decoration-none text-black fw-normal"
          >
            {course.courseName}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
