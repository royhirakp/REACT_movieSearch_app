import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        background: "#6ce9e9",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "35px",
            cursor: "pointer",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            logo
          </Link>
        </span>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "15px",
            textDecoration: "none",
          }}
        >
          <li
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
