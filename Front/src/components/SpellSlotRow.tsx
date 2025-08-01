import React from "react";
import { SpellSlotRowProps } from "../types/spellTypes"; //дописать в spellTypes.ts

export const SpellSlotRow: React.FC<SpellSlotRowProps> = ({
  level,
  max,
  used,
  onCast,
  onRestore,
}) => {
  return (
    <div className="flex justify-between items-center border-b py-1">
      <span>Level {level}</span>
      <span>
        {used} / {max}
      </span>
      <div className="flex gap-2">
        <button
          onClick={onCast}
          disabled={used >= max}
          className="text-green-500"
        >
          Use
        </button>
        <button
          onClick={onRestore}
          disabled={used <= 0}
          className="text-yellow-600"
        >
          Restore
        </button>
      </div>
    </div>
  );
};
