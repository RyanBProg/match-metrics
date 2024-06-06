import { Suspense } from "react";
import TeamStats from "./components/TeamStats";
import SquadStats from "./components/SquadStats";
import Button from "@mui/material/Button";

export default async function Home() {
  return (
    <main>
      <h1>Title</h1>
      <Suspense fallback={<>Loading...</>}>
        <TeamStats />
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <SquadStats />
      </Suspense>
      <Button variant="contained">testing</Button>
    </main>
  );
}
