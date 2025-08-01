import React from "react";
import { ConcentrationPanelProps } from "../types/spellTypes"; //дописать в spellTypes.ts

export const ConcentrationPanel: React.FC<ConcentrationPanelProps> = ({
  activeSpell,
  onClear,
}) => {
  if (!activeSpell) return null;
  return (
    <div className="border p-2 bg-yellow-50">
      <strong>🌀 Concentrating on:</strong> {activeSpell.name}
      <button onClick={onClear} className="ml-4 text-red-500">
        End Concentration
      </button>
    </div>
  );
};
