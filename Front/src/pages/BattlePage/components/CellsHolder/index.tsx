import { useState } from "react";

import { CastTable } from "../CastTable";
import { ChooseLevels } from "../ChooseLevels";
import type { LevelSpell } from "../types";

export const CellsHolder = () => {
  const [state, setState] = useState<LevelSpell[]>([]);

  return (
    <div>
      <ChooseLevels state={state} setState={setState} />
      <CastTable state={state} />
    </div>
  );
};
