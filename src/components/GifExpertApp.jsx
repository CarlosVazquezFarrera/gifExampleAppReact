import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["juego de tronos"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => {
        return <GifGrid key={crypto.randomUUID()} category={category} />;
      })}
    </>
  );
};
