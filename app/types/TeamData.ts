type Params = {
  id: string;
  league: string;
  season: string;
};

type Paging = {
  current: number;
  total: number;
};

type Team = {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
};

type Venue = {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
};

type Resp = {
  team: Team;
  venue: Venue;
};

export type TeamData = {
  get: string;
  parameters: Params;
  errors: string[];
  results: number;
  paging: Paging;
  response: Resp[];
};
