import React from "react";
import { useSpellbookStore } from ""; //дописать путь ыыыыы
import { SpellCard } from "../../components/SpellCard";

export const SpellbookScreen: React.FC = () => {
  const { spellbook, dispatch } = useSpellbookStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {spellbook.map((entry) => (
        <SpellCard
          key={entry.spell.id}
          spell={entry.spell}
          isPrepared={entry.prepared}
          onTogglePrepare={() =>
            dispatch({ type: "TOGGLE_PREPARE_SPELL", spellId: entry.spell.id })
          }
          onCast={() => dispatch({ type: "CAST_SPELL", spell: entry.spell })}
        />
      ))}
    </div>
  );
};
