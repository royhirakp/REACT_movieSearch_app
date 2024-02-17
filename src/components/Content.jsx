import React from "react";

const Content = ({ movie }) => {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "auto",
      }}
    >
      {movie?.Response !== "False" ? (
        <>
          <h2 style={{ textAlign: "center" }}>{movie?.Title}</h2>
          <div
            style={{
              background:
                "linear-gradient(to right, #ffd700, #ffec8b, #ffefd5, #f5cfcf, #88c2f5)",
              borderRadius: "10px",
              padding: "10px",
              display: "flex",
              gap: "10px",
              margin: "1%",
            }}
          >
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={movie?.Poster}
                alt="movie mimage"
                style={{
                  width: "100%",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "1%",
              }}
            >
              <p> {movie?.Writer}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  fontSize: "25px",
                }}
              >
                <p>
                  <strong>Plot:</strong> {movie?.Plot}
                </p>
                <p>
                  <strong>Language: </strong>
                  {movie?.Language}
                </p>
                <p>
                  <strong>Actors: </strong>
                  {movie?.Actors}
                </p>
                <p>
                  <strong>Director: </strong> {movie?.Director}
                </p>
                <p>
                  <strong>Runtime: </strong>
                  {movie?.Runtime}
                </p>
                <p>
                  <strong>Released date:</strong>
                  {movie?.Released}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p
          style={{
            textAlign: "center",
            fontSize: "50px",
          }}
        >
          no movie foundd
        </p>
      )}
    </div>
  );
};

export default Content;
