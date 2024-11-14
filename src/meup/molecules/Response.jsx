import React from "react";
import "./Response.css";

const Response = () => {
  return (
    <div className="mainResponse">
    <div className="left-div">
        <span className="sup-text">SUPPER</span>
        <br />
        <span className="offer-text">OFFER</span>
        <br />
        <div className="discount">
          <span className="big-text">20</span>
          <span className="percent-off">
            <span className="percent">%</span>
            <span className="off">OFF</span>
          </span>
        </div>
      </div>
      <div className="rightDiv">
        <div className="left-section">
            <h2>2019 WEBSITE EVENT</h2>
            <p>NOVEMBER 12 - 13, 2019</p>
            <p>The Midway, San Francisco, CA</p>
        </div>
        <div className="right-section">
            <h1>WEB DESIGN TRENDS</h1>
            <h1 style={{textAlign:'right'}}>2024</h1>
        </div>
    </div>
    </div>
  );
};

export default Response;
