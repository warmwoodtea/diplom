import React from "react";
import { useTranslate } from "../../hooks";

type Props = {
  level: string;
  max: number;
  used: number;
  onCast: () => void;
  onRestore: () => void;
};

export const SpellSlotRow: React.FC<Props> = ({
  level,
  max,
  used,
  onCast,
  onRestore,
}) => {
  const translate = useTranslate();

  return (
    <div className="flex justify-between items-center border-b py-1">
      <span>
        {translate("spell-slot.level")} {level}
      </span>
      <span>
        {used} / {max}
      </span>
      <div className="flex gap-2">
        <button
          onClick={onCast}
          disabled={used >= max}
          className="text-green-500"
        >
          {translate("spell-slot.use")}
        </button>
        <button
          onClick={onRestore}
          disabled={used <= 0}
          className="text-yellow-600"
        >
          {translate("spell-slot.restore")}
        </button>
      </div>
    </div>
  );
};
