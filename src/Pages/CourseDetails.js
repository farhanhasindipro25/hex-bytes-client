import React, { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import Checkout from "./Checkout";

const CourseDetails = () => {
  const [selectedCourse, setSelectedCourse] = useState(false);

  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const handleSelectedCourse = () => {
    setSelectedCourse(true);
    if (selectedCourse) {
      console.log("Course added", selectedCourse);
      <Checkout
        key={selectedCourse.course_id}
        selectedCourse={selectedCourse}
      ></Checkout>;
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <Card className="bg-dark text-white rounded-5 mb-5">
          <Card.Img
            src={courseDetails.coverPicture}
            alt="Card image"
            className="img-fluid rounded-5"
          />
        </Card>
        <div className="d-flex justify-content-between mb-3">
          <h3 className="fw-bolder text-dark">{courseDetails.courseName}</h3>
          <Button variant="warning" className="px-5 py-2">
            <span className="me-2">Download PDF</span>
            <FaDownload />
          </Button>
        </div>
        <div className="mb-3">
          <h5>
            <Badge bg="dark" className="text-warning">
              Course Price: {courseDetails.price}
            </Badge>
          </h5>
          <h5>
            <Badge bg="warning" className="text-dark">
              Course Duration: {courseDetails.duration}
            </Badge>
          </h5>
          <h5>
            <Badge bg="warning" className="text-dark">
              Course Instructor: {courseDetails.courseInstructor}
            </Badge>
          </h5>
        </div>
        <h6 className="fw-semibold mt-5">{courseDetails.description}</h6>
        <div className="mb-3 mt-5">
          <div>
            <h6 className="fw-bold mt-5 mb-3">PRE-REQUISITES</h6>
            {courseDetails.preRequisites.map((item) => (
              <li>{item}</li>
            ))}
          </div>
          <div>
            <h6 className="fw-bold mt-5 mb-3">COURSE CONTENT</h6>
            {courseDetails.courseContent.map((item) => (
              <li>{item}</li>
            ))}
          </div>
          <div>
            <h6 className="fw-bold mt-5 mb-3">PROJECTS</h6>
            {courseDetails.projects.map((item) => (
              <li>{item}</li>
            ))}
          </div>
        </div>
        <Button
          onClick={handleSelectedCourse}
          className="px-5 py-2 d-block mx-auto mb-5 mt-5 fw-bold"
          variant="dark"
        >
          <Link
            to={`/checkout/$courseDetails.course_id`}
            className="text-warning text-decoration-none"
          >
            Get Premium Access
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseDetails;
