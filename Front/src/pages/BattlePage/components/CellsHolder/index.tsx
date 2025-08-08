import { useState } from "react";

import { CastTable } from "../CastTable";
import type { LevelSpell } from "../types";

export const CellsHolder = () => {
  const [state, setState] = useState<LevelSpell[]>([]);

  return (
    <div>
      <CastTable state={state} setState={setState} />
    </div>
  );
};
