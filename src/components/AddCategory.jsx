import { useState } from "react";
import PropTypes from "prop-types";

export default function AddCategory({ onNewCategory }) {
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
    <form onSubmit={onSubmit} aria-label="form-category">
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
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
