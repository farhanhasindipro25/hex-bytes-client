import React from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const selectedCourse = useLoaderData();
  console.log(selectedCourse);
  return (
    <div className="container mt-5 mb-5">
      <Card className="bg-dark border rounded-5 border-2 border-dark">
        <Card.Img
          variant="top"
          className="img-fluid p-2 rounded-5"
          src={selectedCourse.coverPicture}
        />
        <Card.Body>
          <Card.Title className="text-warning fw-bold text-center">
            {selectedCourse.courseName}
          </Card.Title>
          <div className="mb-3 d-flex flex-column justify-content-center align-items-center">
            <h5>
              <Badge bg="light" className="text-dark">
                Course Price: {selectedCourse.price}
              </Badge>
            </h5>
            <h5>
              <Badge bg="warning" className="text-dark">
                Course Duration: {selectedCourse.duration}
              </Badge>
            </h5>
            <h5>
              <Badge bg="warning" className="text-dark">
                Course Instructor: {selectedCourse.courseInstructor}
              </Badge>
            </h5>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Checkout;
