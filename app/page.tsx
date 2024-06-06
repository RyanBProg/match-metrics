"use client";

import { Suspense } from "react";
import TeamStats from "./components/TeamStats";
import SquadStats from "./components/SquadStats";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<>Loading...</>}>
        <TeamStats />
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <SquadStats />
      </Suspense>
    </main>
  );
}
