

export const getGifs = async(categories) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=bfWh9HF0Qv8R3iP4hOoQmmn0sSxXZfFl&q=${categories}&limit=12`

  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map(img =>( {
    id: img.id,
    title: img.title,
    url: img.images.original.url,
  } ))
  console.log(gifs);

  return gifs;
}