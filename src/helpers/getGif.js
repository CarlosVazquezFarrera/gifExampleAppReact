export const getGif = async (category) => {
  try {
    const key = 'Ti33TTdE8JteIRB28RJ01w15dGCxavwM';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=5&q=${category}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => ({
      id,
      title,
      url: images.downsized.url,
    }));
    return gifs;
  } 
  catch (error) {
    return "No se encontró la imagen";
  }
};
