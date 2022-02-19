// Packages
import React from "react";

// Components
import { List } from "./components";

// Data
import { initialItems } from "./shared"

const App: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <List initialItems={initialItems} />;
};

export default App;
