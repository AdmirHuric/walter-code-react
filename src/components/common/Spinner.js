import React from "react";
import {Col} from "react-bootstrap";

const Spinner = () => (
  <Col className="text-center my-3">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </Col>
);

export default Spinner;
