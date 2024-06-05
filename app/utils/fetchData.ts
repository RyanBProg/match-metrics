const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", process.env.FOOTBALL_API_KEY);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
};

export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/status",
      requestOptions
    );
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.error(error);
  }
};
