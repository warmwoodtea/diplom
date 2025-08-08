import { type FC } from "react";

import { Button } from "../../../../components";
import { useTranslate } from "../../../../hooks";
import type { LevelSpell } from "../types";
import styles from "./styles.module.css";

type Props = {
  state: LevelSpell[];
  setState: (newState: LevelSpell[]) => void;
};

export const CastTable: FC<Props> = ({ state, setState }) => {
  const translate = useTranslate();

  const maxValues = state
    .map((x) => x.values.length)
    .reduce((a, b) => Math.max(a, b), 0);

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
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableHeader}></th>
          {state.map((x) => (
            <th key={`level-${x.name}`}>
              <div className={styles.tableHeader}>
                <span>{x.name}</span>
                <Button onClick={() => addCell(x.name)}>
                  {translate("cast-table.add-cell")}
                </Button>
                <Button onClick={() => removeCell(x.name)}>
                  {translate("cast-table.remove-cell")}
                </Button>
              </div>
            </th>
          ))}
          <th>
            <div className={styles.tableHeader}>
              <Button onClick={addLevel}>
                {translate("cast-table.add-row")}
              </Button>
              <Button onClick={removeLevel}>
                {translate("cast-table.remove-row")}
              </Button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {new Array(maxValues).fill(0).map((_, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            <td className={styles.rowLabel}>
              <span>
                {translate("cast-table.row")} {rowIndex + 1}
              </span>
            </td>
            {state.map((currentState, columnIndex) => {
              const found = currentState.values[rowIndex];
              const isFound = found !== undefined;

              return (
                <td key={`cell-${rowIndex}-${columnIndex}`}>
                  {isFound && (
                    <span>
                      {found
                        ? translate("cast-table.yes")
                        : translate("cast-table.no")}
                    </span>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
