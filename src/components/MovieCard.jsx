import React from "react";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie = {} }) => {
  console.log(movie);
  const { Poster, Title, Genre, Plot } = movie;
  return (
    <div>
      <Card
        className="d-flex justify-content-center"
        style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>{Genre}</Card.Text>
          <Card.Text>{Plot}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
