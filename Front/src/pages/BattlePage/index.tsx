import { Toggle } from "../../components";
import { CellsHolder } from "./components";

export const BattlePage = () => {
  const handleToggle = (isActive: boolean, spellName: string) => {
    console.log(`${spellName}: ${isActive ? "Concentration" : "Interrupted"}`);
  };

  return (
    <div className="page">
      <h1>Concentration</h1>

      <div className="spells-list">
        <Toggle onChange={(isActive) => handleToggle(isActive, "pupupuuupu")} />
      </div>
      <CellsHolder />
    </div>
  );
};
