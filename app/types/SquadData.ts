type Birth = {
  date: string;
  place: string;
  country: string;
};

type Player = {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: Birth;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
};

type Team = {
  id: number;
  name: string;
  logo: string;
};

type League = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
};

type Games = {
  appearences: number | null;
  lineups: number | null;
  minutes: number | null;
  number: number | null;
  position: string;
  rating: number | null;
  captain: boolean;
};

type Substitutes = {
  in: number | null;
  out: number | null;
  bench: number | null;
};

type Shots = {
  total: number | null;
  on: number | null;
};

type Goals = {
  total: number | null;
  conceded: number | null;
  assists: number | null;
  saves: number | null;
};

type Passes = {
  total: number | null;
  key: number | null;
  accuracy: number | null;
};

type Tackles = {
  total: number | null;
  blocks: number | null;
  interceptions: number | null;
};

type Duels = {
  total: number | null;
  won: number | null;
};

type Dribbles = {
  attempts: number | null;
  success: number | null;
  past: number | null;
};

type Fouls = {
  drawn: number | null;
  committed: number | null;
};

type Cards = {
  yellow: number | null;
  yellowred: number | null;
  red: number | null;
};

type Penalty = {
  won: number | null;
  commited: number | null;
  scored: number | null;
  missed: number | null;
  saved: number | null;
};

type Statistics = {
  team: Team;
  league: League;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
};

export type PlayerData = {
  player: Player;
  statistics: Statistics[];
};
