import { Button, SpellCard } from "../../../../components";
import { useSpells, useTranslate } from "../../../../hooks";

import styles from "./styles.module.css";

export const SelectedSpells = () => {
  const translate = useTranslate();
  const { remove, contains, spells } = useSpells();

  return (
    <div className={styles.holder}>
      {spells.map((spell) => {
        const selected = contains(spell);

        return (
          <SpellCard key={spell.id} chosen={selected} spell={spell}>
            <Button onClick={() => remove(spell)}>
              {translate("selected-spells.remove")}
            </Button>
          </SpellCard>
        );
      })}
    </div>
  );
};
