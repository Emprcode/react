import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const SearchForm = () => {
  const [form, setForm] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="d-flex justify-content-center p-5">
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Control onChange={handleOnChange} placeholder="Movie Name" />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Search
            </Button>{" "}
          </Col>
        </Row>
      </Form>
    </div>
  );
};
