export const fetchData = async (url: String) => {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
};
