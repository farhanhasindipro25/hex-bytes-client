import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const CourseCards = () => {
  const courses = useLoaderData();
  console.log(courses);

  return (
    <div>
      <Row className="mt-5">
        <Col lg="3">
          {courses.map((course) => (
            <CourseCard
              key={course.details.course_id}
              course={course}
            ></CourseCard>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default CourseCards;
