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
    fetch(
      " https://b610-lerning-platform-server-side-seven.vercel.app/course-categories"
    )
      .then((result) => result.json())
      .then((data) => setCourseCategories(data));
  }, []);

  console.log(courseCategories[0]);
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card className="bg-dark py-2 mt-5 rounded-4">
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
        </Card>
      </Accordion>
    </div>
  );
};

export default CourseCategories;
