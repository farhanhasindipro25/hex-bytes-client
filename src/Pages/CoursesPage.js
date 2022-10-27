import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCards from "./CourseCards";
import LeftNav from "./LeftNav";

const CoursesPage = () => {
  return (
    <div>
      <Container className="mb-5">
        <Row>
          <Col lg="3">
            <LeftNav></LeftNav>
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
