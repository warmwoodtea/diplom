import { type FC } from "react";

import { useTranslate } from "../../../../hooks";
import type { LevelSpell } from "../types";
import styles from "./styles.module.css";

type Props = {
  state: LevelSpell[];
};

export const CastTable: FC<Props> = ({ state }) => {
  const translate = useTranslate();

  const maxValues = state
    .map((x) => x.values.length)
    .reduce((a, b) => Math.max(a, b), 0);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableHeader}></th>
          {state.map((x) => (
            <th key={`level-${x.name}`} className={styles.tableHeader}>
              {x.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {new Array(maxValues).fill(0).map((_, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            <td className={styles.rowLabel}>
              {translate("cast-table.row")} {rowIndex + 1}
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
