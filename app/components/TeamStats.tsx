"use server";

import React from "react";
import { TeamData } from "../types/TeamData";
import teamData from "../local-data/team-data.json";

const data: TeamData = teamData as TeamData;

export default async function TeamStats() {
  return (
    <>
      <h2>{data.response[0].team.name}</h2>
      <p>{data.response[0].team.country}</p>

      <h3>Stadium</h3>
      <p>{data.response[0].venue.name}</p>
      <p>{data.response[0].venue.capacity}</p>
      <p>{data.response[0].venue.city}</p>
    </>
  );
}
