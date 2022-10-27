import React from "react";
import { Row } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const CourseCards = () => {
  const courses = useLoaderData();

  return (
    <div>
      <Row className="mt-5 g-3">
        {courses.map((course) => (
          <CourseCard key={course.course_id} course={course}></CourseCard>
        ))}
      </Row>
    </div>
  );
};

export default CourseCards;
