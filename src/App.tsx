// Packages
import React, { useState } from "react";

const src: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [list, setList] = useState(["Luiz", "Henrique", "de"]);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleAddNameToList = () => {
    setList((state) => [...state, "Jesus"]);
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
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
