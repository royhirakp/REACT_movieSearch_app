import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [searchText, setSearchText] = useState("Hero");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?t=${searchText}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [searchText]);

  if (loading) {
    return (
      <section
        style={{
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <h1>Loading...</h1>
      </section>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Navbar />
      <div
        style={{
          flexGrow: "1",
        }}
      >
        <div
          style={{
            padding: "10px",
          }}
        >
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="type the movie name"
              style={{
                padding: "6px",
                width: "30%",
                fontSize: "18px",
                paddingLeft: "18px",
                borderRadius: "5px",
                border: "2px solid gray",
              }}
            />
            <input
              style={{
                background: "gray",
                color: "#ffff",
                cursor: "pointer",
                textTransform: "uppercase",
                padding: "1px 10px",
              }}
              type="submit"
              value="submit"
            />
          </form>
        </div>
        {searchText ? (
          <Content movie={movie} />
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
            }}
          >
            <h2> search movie name...</h2>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
