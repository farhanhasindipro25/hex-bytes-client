import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { AccordionContext, Button } from "react-bootstrap";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Button variant="warning" className="w-100" onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

const CourseCategories = () => {
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((result) => result.json())
      .then((data) => setCourseCategories(data));
  }, []);

  console.log(courseCategories[0]);
  return (
    <div>
      <h4 className="mt-5 mb-4 text-center">Course Categories</h4>

      <Accordion defaultActiveKey="0">
        <Card className="bg-dark py-2">
          {/* First course category */}
          <Card.Header className="text-center">
            <ContextAwareToggle eventKey="1">
              {courseCategories[0].category}
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="d-flex flex-column">
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[0].courses[0]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[0].courses[1]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[0].courses[2]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[0].courses[3]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[0].courses[4]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[0].courses[5]}
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
          {/* Second Course Category */}
          <Card.Header className="text-center">
            <ContextAwareToggle eventKey="2">
              {courseCategories[1].category}
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="d-flex flex-column">
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[1].courses[0]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[1].courses[1]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[1].courses[2]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[1].courses[3]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[1].courses[4]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[2].courses[5]}
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
          {/* Third Course Category */}
          <Card.Header className="text-center">
            <ContextAwareToggle eventKey="3">
              {courseCategories[2].category}
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body className="d-flex flex-column">
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[2].courses[0]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[2].courses[1]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[2].courses[2]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[2].courses[3]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[2].courses[4]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[2].courses[5]}
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
          {/* Fourth Course Category */}
          <Card.Header className="text-center">
            <ContextAwareToggle eventKey="4">
              {courseCategories[3].category}
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body className="d-flex flex-column">
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[3].courses[0]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[3].courses[1]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[3].courses[2]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[3].courses[3]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[3].courses[4]}
              </NavLink>
              <NavLink className="text-decoration-none fw-normal text-white text-center my-2">
                {courseCategories[3].courses[5]}
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default CourseCategories;
