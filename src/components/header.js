import React from "react";
import rankingJson from "../data/rankings.json";

export default function Header() {
  let sportsName = rankingJson.sports[0].name;
  let leagueName = rankingJson.leagues[0].name;

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightgrey",
        padding: "9px",
        color: "green",
      }}
    >
      Ranking Of Clubs By Different Poll Agencies For {sportsName} -{leagueName}
    </div>
  );
}
