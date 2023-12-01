import PropTypes from "prop-types";
export default function GifItem({ title, url }) {
  return (
    <div className="card">
      <img src={url} alt={title} />
    </div>
  );
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
