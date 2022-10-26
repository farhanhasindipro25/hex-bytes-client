import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseCard = ({ course }) => {
  console.log(course);
  const { displayPicture, courseName, duration, price } = course.details;
  return (
    <div>
      <Card style={{ width: "18rem" }} className="bg-dark border-0">
        <Card.Img
          variant="top"
          src={displayPicture}
          className="img-fluid w-100 bg-white"
        />
        <Card.Body>
          <Card.Title className="text-white text-center">
            {courseName}
          </Card.Title>
          <Card.Text className="text-white text-center">{price}</Card.Text>
          <Card.Text className="text-white text-center">{duration}</Card.Text>
          <Button variant="warning" className="d-block mx-auto">
            See Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
