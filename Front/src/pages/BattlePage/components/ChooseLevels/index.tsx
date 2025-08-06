import type { FC } from "react";

import { Button } from "../../../../components";
import { useTranslate } from "../../../../hooks";
import type { LevelSpell } from "../types";
import styles from "./styles.module.css";

type Props = {
  state: LevelSpell[];
  setState: (newState: LevelSpell[]) => void;
};

export const ChooseLevels: FC<Props> = ({ state, setState }) => {
  const translate = useTranslate();

  const addLevel = () => {
    const maxLevel = state.length;
    setState([
      ...state,
      {
        name: `${translate("choose-levels.level")} ${maxLevel + 1}`,
        values: [],
      },
    ]);
  };

  const removeLevel = () => {
    setState(state.slice(0, state.length - 1));
  };

  const addCell = (name: string) => {
    setState(
      state.map((x) => {
        if (x.name === name) {
          return { ...x, values: [...x.values, true] };
        }
        return x;
      }),
    );
  };

  const removeCell = (name: string) => {
    setState(
      state.map((x) => {
        if (x.name === name) {
          return { ...x, values: x.values.slice(0, x.values.length - 1) };
        }
        return x;
      }),
    );
  };

  return (
    <div className={styles.holder}>
      <div className={styles.levels}>
        {state.map((x) => (
          <div key={`level-${x.name}`} className={styles.level}>
            <div>{x.name}</div>
            <div>
              <Button onClick={() => addCell(x.name)}>
                {translate("choose-levels.add")}
              </Button>
              <Button onClick={() => removeCell(x.name)}>
                {translate("choose-levels.remove")}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.actions}>
        <Button onClick={addLevel}>
          {translate("choose-levels.add-level")}
        </Button>
        <Button onClick={removeLevel}>
          {translate("choose-levels.remove-level")}
        </Button>
      </div>
    </div>
  );
};
