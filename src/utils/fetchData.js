export const exerciseOptions = {
  // creating exerciseOptions variable that will be used in the fetchData function
  method: "GET", // setting method to GET
  headers: {
    // setting headers
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com", // setting X-RapidAPI-Host header to exercisedb.p.rapidapi.com
    "X-RapidAPI-Key": "d6af88f178msh9c68da63ee848d3p11a29cjsn77962754e768", // setting X-RapidAPI-Key header
  },
};

export const youtubeOptions = {
  // creating youtubeOptions variable that will be used in the fetchData function
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "d6af88f178msh9c68da63ee848d3p11a29cjsn77962754e768",
  },
};
export const fetchData = async (url, options) => {
  // creating fetchData function that will fetch data from the API
  const res = await fetch(url, options); // setting res variable to the data that is fetched from the API
  const data = await res.json(); // setting data variable to the data that is fetched from the API

  return data; // returning data
};
