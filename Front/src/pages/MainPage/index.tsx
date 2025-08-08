import { useNavigate } from "react-router-dom";

import { Button } from "../../components";
import { useTranslate } from "../../hooks";
import { SelectedSpells, ServerSpells } from "./components";
import styles from "./styles.module.css";

export const MainPage = () => {
  const translate = useTranslate();
  const navigate = useNavigate();

  return (
    <div className={styles.holder}>
      <div className={styles.title}>{translate("main-page.title")}</div>
      <div className={styles.selectors}>
        <ServerSpells />
        <SelectedSpells />
      </div>
      <div className={styles.btnHolder}>
        <Button onClick={() => navigate("/battle")}>
          {translate("main-page.start-battle")}
        </Button>
      </div>
    </div>
  );
};
