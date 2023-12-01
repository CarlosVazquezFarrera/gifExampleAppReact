
export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ti33TTdE8JteIRB28RJ01w15dGCxavwM&limit=5&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(({ id, title, images }) => ({
      id,
      title,
      url: images.downsized.url,
    }));
    console.log(gifs)
    return gifs;
  };