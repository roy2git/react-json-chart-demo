import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Ranking(props) {
  let ranking = props.rankInfo;

  console.log(ranking);

  let rankingTable = (
    <table className="table .table-condensed ">
      <caption
        style={{ captionSide: "top", textAlign: "center", fontWeight: "bold" }}
      >
        {ranking.name}
      </caption>
      <thead>
        <tr>
          <th>Club Name</th>
          <th>Location</th>
          <th>Points</th>
          <th>Current Rank</th>
          <th>Previous Rank</th>
          <th>&darr;/&uarr; </th>
        </tr>
      </thead>

      <tbody>
        {ranking.ranks.map((rank, i) => {
          return (
            <tr key={i}>
              <th>{rank.team.name}</th>
              <td>{rank.team.location}</td>
              <td>{rank.points}</td>
              <td>{rank.current}</td>
              <td>{rank.previous}</td>
              <td>{rank.trend}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
  return <div className="item">{rankingTable}</div>;
}

export default Ranking;
