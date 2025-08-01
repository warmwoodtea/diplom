import React from "react";
import { SpellCardProps } from "../types/spellTypes"; //хз чес гаваря

export const SpellCard: React.FC<SpellCardProps> = ({
  spell,
  isPrepared,
  onTogglePrepare,
  onCast,
}) => {
  return (
    <div
      className={`border p-2 rounded shadow-sm ${
        isPrepared ? "bg-purple-100" : "bg-white"
      }`}
    >
      <h3 className="text-lg font-bold">{spell.name}</h3>
      <p className="text-sm">
        Level {spell.level} — {spell.school}
      </p>
      {spell.concentration && (
        <span className="text-xs text-red-500">Concentration</span>
      )}
      <div className="flex gap-2 mt-2">
        {onTogglePrepare && (
          <button onClick={onTogglePrepare} className="text-blue-600">
            {isPrepared ? "Unprepare" : "Prepare"}
          </button>
        )}
        {onCast && (
          <button onClick={onCast} className="text-green-600">
            Cast
          </button>
        )}
      </div>
    </div>
  );
};
