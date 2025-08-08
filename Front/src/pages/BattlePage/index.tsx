import { Toggle } from "../../components";
import { CellsHolder } from "./components";
import styles from "./styles.module.css";

export const BattlePage = () => {
  const handleToggle = (isActive: boolean, spellName: string) => {
    console.log(`${spellName}: ${isActive ? "Concentration" : "Interrupted"}`);
  };

  return (
    <div className={styles.page}>
      <div className={styles.title}>Battle Page</div>
      <h1>Concentration</h1>

      <div className="spells-list">
        <Toggle onChange={(isActive) => handleToggle(isActive, "pupupuuupu")} />
      </div>
      <CellsHolder />
    </div>
  );
};
