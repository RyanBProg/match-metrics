const myHeaders = new Headers();
if (typeof process.env.FOOTBALL_API_KEY === "string") {
  myHeaders.append("x-rapidapi-key", process.env.FOOTBALL_API_KEY);
}

const requestOptions = {
  method: "GET",
  headers: myHeaders,
};

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url, requestOptions);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.error(error);
  }
};
