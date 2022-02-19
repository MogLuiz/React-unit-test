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
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default src;
