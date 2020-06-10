import React from "react";
import Rankings from "./rankings";
import "../styles/dashboard.css";
import Chart from "../chart/chart2.js";

import Header from "./header";

function DashBoard() {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="dashboard">
        <Rankings />
      </div>
      <hr></hr>
      <Chart></Chart>
    </React.Fragment>
  );
}

export default DashBoard;
