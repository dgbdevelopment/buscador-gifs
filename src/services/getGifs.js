const API_KEY = process.env.REACT_APP_API_KEY_DEV;

export default async function getGifs(keyword, page = 0) {
  let URL;
  const limit = 24;

  keyword
    ? (URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&lang=es&limit=${limit}&rating=g&offset=${
        page * limit
      }`)
    : (URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=g&offset=${
        page * limit
      }`);
  return fetch(URL)
    .then((res) => res.json())
    .then((results) => results.data);
}
