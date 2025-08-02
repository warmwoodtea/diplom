import { useNavigate } from "react-router-dom";
import { useTranslate } from "../../hooks";
import { SelectedSpells, ServerSpells } from "./components";

import styles from "./styles.module.css";

export const MainPage = () => {
  const translate = useTranslate();
  const navigate = useNavigate();

  return (
    <div className={styles.holder}>
      <div>{translate("main-page.title")}</div>
      <div className={styles.selectors}>
        <ServerSpells />
        <SelectedSpells />
      </div>
      <div>
        <button onClick={() => navigate("/battle")}>
          {translate("main-page.start-battle")}
        </button>
      </div>
    </div>
  );
};
