import PropTypes from "prop-types";

import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export default function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          isLoading && (<h2>Cargando......</h2>)
        }
        {images.map((img) => {
          return <GifItem key={img.id} title={img.title} url={img.url} />;
        })}
      </div>
    </>
  );
}
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
