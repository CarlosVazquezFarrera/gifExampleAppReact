import { useState } from "react";
import PropTypes from "prop-types";

export default function AddProperty({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();

    if (value == '') return;

    onNewCategory(value);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        required
        placeholder="Buscar gif"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
}
AddProperty.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
