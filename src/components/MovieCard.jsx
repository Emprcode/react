import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const MovieCard = ({ movie = {} }) => {
  console.log(movie);
  const { Poster, Title, Genre, Plot } = movie;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Genre}</Card.Text>
        <Card.Text>{Plot}</Card.Text>
        <Button variant="primary">Happy</Button>
      </Card.Body>
    </Card>
  );
};
