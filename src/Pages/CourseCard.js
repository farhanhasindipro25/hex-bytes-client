import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  console.log(course);
  const { course_id, displayPicture, courseName, duration, price } = course;
  return (
    <Col lg="4" md="6" sm="12">
      <Card
        className="bg-dark border border-5 border-dark rounded-3"
      >
        <Card.Img
          variant="top"
          src={displayPicture}
          className="rounded-3 img-fluid w-100"
        />
        <Card.Body>
          <Card.Title className="text-center text-warning mb-3">
            {courseName}
          </Card.Title>
          <Card.Text className="text-center my-0 pb-1 text-white">
            Course Price: {price}
          </Card.Text>
          <Card.Text className="text-white text-center my-0">
            Course Duration: {duration}
          </Card.Text>
          <Button variant="warning" className="d-block mx-auto mt-4">
            <Link
              to={`/courses/${course_id}`}
              className="text-decoration-none text-black"
            >
              See Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseCard;
