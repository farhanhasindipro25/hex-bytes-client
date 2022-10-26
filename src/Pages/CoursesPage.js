import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseCards from "./CourseCards";
import CourseCategories from "./CourseCategories";

const CoursesPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="3">
            <CourseCategories></CourseCategories>
          </Col>
          <Col lg="9">
            <CourseCards></CourseCards>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoursesPage;
