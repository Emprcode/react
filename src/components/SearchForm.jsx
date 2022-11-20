import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const SearchForm = () => {
  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  return (
    <div className="d-flex justify-content-center p-5">
      <Form>
        <Row>
          <Col>
            <Form.Control onChange={handleOnChange} placeholder="Movie Name" />
          </Col>
          <Col>
            <Button variant="primary">Search</Button>{" "}
          </Col>
        </Row>
      </Form>
    </div>
  );
};
