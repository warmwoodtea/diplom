import { Button, SpellCard } from "../../../../components";
import { useLoadSpells, useSpells, useTranslate } from "../../../../hooks";

import styles from "./styles.module.css";

export const ServerSpells = () => {
  const translate = useTranslate();
  const { add, remove, contains } = useSpells();
  const { loading, spells } = useLoadSpells();

  if (loading) return <div>{translate("main-page.loading")}</div>;

  return (
    <div className={styles.holder}>
      {spells.map((spell) => {
        const selected = contains(spell);

        return (
          <SpellCard key={spell.id} chosen={selected} spell={spell}>
            {selected && (
              <Button onClick={() => remove(spell)}>
                {translate("server-spells.remove")}
              </Button>
            )}
            {!selected && (
              <Button onClick={() => add(spell)}>
                {translate("server-spells.add")}
              </Button>
            )}
          </SpellCard>
        );
      })}
    </div>
  );
};
