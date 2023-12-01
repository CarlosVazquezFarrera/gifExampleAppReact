import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function startFetching() {
      const images = await getGif(category);
      if (images) {
        setImages(images);
        setIsLoading(false);
      }
    }

    startFetching();
  }, [category]);

  return {
    images,
    isLoading
  };
};
