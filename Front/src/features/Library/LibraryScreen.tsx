import React, { useEffect, useState } from "react";
import { Spell } from "../../types/spellTypes";
import { useSpellbookStore } from ""; //дописать путь ыыыыыыыыыыы

export const LibraryScreen: React.FC = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useSpellbookStore();

  useEffect(() => {
    setLoading(true);
    fetch("https://www.dnd5eapi.co/api/spells")
      .then((res) => res.json())
      .then(async (data) => {
        const results = data.results.slice(0, 20); // limit for example
        const detailedSpells = await Promise.all(
          results.map(async (s: any) => {
            const res = await fetch(`https://www.dnd5eapi.co${s.url}`);
            return res.json();
          })
        );

        const spellsMapped: Spell[] = detailedSpells.map((spell: any) => ({
          id: spell.index,
          name: spell.name,
          level: spell.level,
          school: spell.school.name,
          description: spell.desc?.[0] || "",
          concentration: spell.concentration === "yes",
          ritual: spell.ritual === "yes",
          classes: spell.classes.map((c: any) => c.name),
          castingTime: spell.casting_time,
          range: spell.range,
          duration: spell.duration,
          components: spell.components,
          source: "api",
        }));

        setSpells(spellsMapped);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📚 Spell Library</h2>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {spells.map((spell) => (
          <div key={spell.id} className="border rounded p-2">
            <h3 className="font-semibold">{spell.name}</h3>
            <p className="text-sm">
              Level {spell.level} — {spell.school}
            </p>
            <button
              onClick={() => dispatch({ type: "ADD_SPELL", spell })}
              className="text-blue-600 mt-1"
            >
              Add to Spellbook
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
