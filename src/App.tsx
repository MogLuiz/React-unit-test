// Packages
import React, { useState } from "react";

const src: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(["Luiz", "Henrique", "de"]);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleAddNameToList = () => {
    setTimeout(() => setList((state) => [...state, newItem]), 500);
  };

  const handleRemoveFromList = (item: string) => {
    setTimeout(() => {
      setList((state) => state.filter((currentItem) => currentItem !== item));
    }, 500);
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      <input
        placeholder="Novo Item"
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddNameToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => handleRemoveFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default src;
