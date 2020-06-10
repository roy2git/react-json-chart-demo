import React from "react";
import rankingJson from "../data/rankings.json";

import Ranking from "./ranking";

import "../styles/dashboard.css";

function Rankings() {
  console.log(rankingJson);

  let rankingArray = rankingJson.rankings.map((ranking, index) => {
    console.log(ranking);
    return <Ranking key={index} rankInfo={ranking}></Ranking>;
  });
  return <React.Fragment>{rankingArray}</React.Fragment>;
}

export default Rankings;
