import React from "react";
import { TeamData } from "../types/TeamData";
import teamData from "../local-data/team-data.json";

const data: TeamData = teamData as TeamData;

// mui
import { Chip } from "@mui/material";

export default async function Team() {
  return (
    <>
      <div>
        <p>Team:</p>
        <h1>{data.response[0].team.name}</h1>
      </div>
      <p>
        <span>Country: </span>
        {data.response[0].team.country}
      </p>
      <p>
        <span>Founded: </span>
        {data.response[0].team.founded}
      </p>
      <p>
        <span>League: </span>
        Premier League
      </p>
      <Chip label="Chip Outlined" variant="outlined" />
      <h3>Stadium</h3>
      <p>
        <span>Name: </span>
        {data.response[0].venue.name}
      </p>
      <p>
        <span>Street: </span>
        {data.response[0].venue.address}
      </p>
      <p>
        <span>City: </span>
        {data.response[0].venue.city}
      </p>
      <p>
        <span>Capactiy: </span>
        {data.response[0].venue.capacity}
      </p>
      <p>
        <span>Surface: </span>
        {data.response[0].venue.surface}
      </p>
    </>
  );
}
