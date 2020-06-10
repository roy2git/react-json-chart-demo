import React from "react";
import { Bar } from "react-chartjs-2";

import rankingJson from "../data/rankings.json";

console.log(rankingJson.rankings);

let allPollNames = rankingJson.rankings.map((rank) => rank.name);
let allTeamNames = [];
rankingJson.rankings.forEach((ranking1) => {
  ranking1.ranks.forEach(function (rank) {
    if (allTeamNames.indexOf(rank.team.name) === -1)
      allTeamNames.push(rank.team.name);
  });
});

console.log(allTeamNames);

let rankArray = [];

allPollNames.forEach((pollName, i) => {
  rankArray[i] = [];
  allTeamNames.forEach((teamName) => {
    let teamRank = rankingJson.rankings[i].ranks.find(
      (rank) => rank.team.name == teamName
    );
    console.log(teamRank);
    rankArray[i].push(teamRank ? teamRank.current : 0);
  });
  console.log(rankArray);
});

//let rankData=rankingJson.rankings.

const teamRanks = {
  labels: allTeamNames,
  datasets: [
    {
      label: allPollNames[0],
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "red",
      borderWidth: 2,
      data: rankArray[0],
    },
    {
      label: allPollNames[1],
      backgroundColor: "green",
      borderColor: "green",
      borderWidth: 2,
      data: rankArray[1],
    },
    {
      label: allPollNames[2],
      backgroundColor: "blue",
      borderColor: "blue",
      borderWidth: 2,
      data: rankArray[2],
    },
    {
      label: allPollNames[3],
      backgroundColor: "black",
      borderColor: "black",
      borderWidth: 2,
      data: rankArray[3],
    },
    {
      label: allPollNames[4],
      backgroundColor: "yellow",
      borderColor: "yellow",
      borderWidth: 2,
      data: rankArray[4],
    },
  ],
};

export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={teamRanks}
          options={{
            title: {
              display: true,
              text: "Ranking Of a club by different Poll Agencies",
              fontSize: 12,
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
        />
      </div>
    );
  }
}
