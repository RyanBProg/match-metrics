"use client";

import React from "react";
import { PlayerData } from "../types/SquadData";
import { squadData } from "../utils/handleLocalData";

const data: PlayerData[] = squadData as PlayerData[];

export default async function SquadStats() {
  return (
    <div>
      <h2>Squad Stats</h2>
      <ul>
        {data.map((player) => {
          return (
            <li>
              <h3>{player.player.name}</h3>
              <p>{player.player.age}</p>
              <p>{player.statistics[0].games.position}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
