import React from "react";
import { useSpellbookStore } from ""; //дрописать путь ыыыыы
import { SpellSlotRow } from "../../components/SpellSlotRow";
import { ConcentrationPanel } from "../../components/ConcentrationPanel";

export const SlotsScreen: React.FC = () => {
  const { spellSlots, dispatch, activeConcentration } = useSpellbookStore();

  return (
    <div>
      {Object.entries(spellSlots).map(([level, { max, used }]) => (
        <SpellSlotRow
          key={level}
          level={Number(level) as any}
          max={max}
          used={used}
          onCast={() =>
            dispatch({
              type: "CAST_SPELL",
              spell: {
                id: "manual",
                name: "Manual",
                level: Number(level) as any,
                school: "Evocation",
                description: "",
                concentration: false,
                ritual: false,
                classes: [],
                castingTime: "",
                range: "",
                duration: "",
                components: [],
                source: "manual",
              },
            })
          }
          onRestore={() =>
            dispatch({ type: "RESTORE_SLOT", level: Number(level) as any })
          }
        />
      ))}
      <ConcentrationPanel
        activeSpell={activeConcentration}
        onClear={() => dispatch({ type: "CLEAR_CONCENTRATION" })}
      />
    </div>
  );
};
