import React from "react";
import Article from "./Article";
import Footer from "./Footer";
import Map from "./Map";

const Content = ({ click, typeIndex }) => {
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
          <Article className="room" typeIndex={typeIndex} />
          <Footer id="footer" />
        </div>
      </div>
    );
  }
};

export default Content;
