import React from "react";

const NotFound = () => {
  return (
    <div>
      <div
        style={{ height: "100vh" }}
        className="bg-dark d-flex align-items-center justify-content-center flex-column"
      >
        <iframe
          src="https://giphy.com/embed/SDUiharA58JhGCwDqP"
          width="180"
          height="180"
          frameBorder="0"
          class="giphy-embed rounded-circle"
          allowFullScreen
        ></iframe>
        <h4 className="text-center fw-semibold mt-4 text-white">
          404: That address could not be found.
        </h4>
      </div>
    </div>
  );
};

export default NotFound;
