import axios from "axios";
import React, { useState, useEffect } from "react";
import Article from "./Article";
import Footer from "./Footer";
import Map from "./Map";

const Content = ({ click, typeIndex }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/markers");
        setMarkers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (click) {
    // Map
    return (
      <div>
        <div id="content">
          <Map markers={markers} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div id="content">
          <Article className="room" click={click} typeIndex={typeIndex} />
          <Footer id="footer" />
        </div>
      </div>
    );
  }
};

export default Content;
