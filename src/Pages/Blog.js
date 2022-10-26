import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="container mt-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is CORS?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why do we use Firebase? What other options are there for
            authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to a locally made
            app. It supports authentication using passwords, phone numbers,
            Google, Facebook, Github, Twitter, and so on.
            <br />
            <br />
            Other options for authentication include realtime database systems
            such as GraphQL and Rest APIs, MySQL, NoSQL, etc.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does private routes work?</Accordion.Header>
          <Accordion.Body>
            The private route secures a specific route from unauthenticated
            users. If a user is not logged in, they are restricted to visit the
            private routes. If they are logged in, they can access the private
            routes.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            NodeJS is a JavaScript runtime environment that achieves low latency
            and high throughput by taking a “non-blocking” approach to serving
            requests. In other words, Node. js wastes no time or resources on
            waiting for I/O requests to return.
            <br />
            <br />
            It is a used as a backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. NodeJS runs on chrome v8 engine which converts
            javascript code into machine code. It is highly scalable,
            lightweight, fast, and data-intensive.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
