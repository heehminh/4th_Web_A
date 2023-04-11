import React from "react";
import Article from "./Article";
import Footer from "./Footer";
import Map from "./Map";

const Content = ({ click }) => {
  if (click) {
    // Map
    console.log("map");
    return (
      <div>
        <div id="content">
          <Map />
        </div>
      </div>
    );
  } else {
    console.log("room");
    return (
      <div>
        <div id="content">
          <Article className="room" />
          <Footer id="footer" />
        </div>
      </div>
    );
  }
};

export default Content;
