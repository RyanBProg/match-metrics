import { fetchData } from "./fetchData";

export const handleData = async (url: string) => {
  const rawData = await fetchData(url);
  const newData = [...rawData.response];

  if (rawData.paging.total > 1) {
    let i = 2;
    do {
      // fetch other pages
      const moreData = await fetchData(`${url}&page=${i}`);
      newData.push(...moreData.response);

      i++;
    } while (i < rawData.paging.total);
  }

  return newData;
};

// fetch for API data

// const teamData = await handleData(
//   "https://v3.football.api-sports.io/teams?id=33&league=39&season=2023"
// );
// const squadData = await handleData(
//   "https://v3.football.api-sports.io/players?team=33&season=2023"
// );
