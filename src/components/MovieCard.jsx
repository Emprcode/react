import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const MovieCard = ({ movie }) => {
  console.log(movie);
  const { Poster, Title, Genre, Plot } = movie;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Genre}</Card.Text>
        <Card.Text>{Plot}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="danger">Happy</Button>
          <Button variant="success">Lazy</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
