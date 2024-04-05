import { useState } from "react";

const Navbar = ({ labels, currentTab, setCurrent }) => {
  return (
    <div className="navbar-container">
      {labels && labels.length > 0
        ? labels.map((label, index) => (
            <a
              key={label}
              onClick={() => setCurrent(index)}
              className={"link " + (currentTab === index ? "active" : "")}
            >
              {label}
            </a>
          ))
        : null}
    </div>
  );
};

export default Navbar;
