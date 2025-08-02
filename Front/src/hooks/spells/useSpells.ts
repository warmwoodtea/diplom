import { atom, useAtom } from "jotai";
import type { Spell } from "../../api";

const localAtom = atom<Spell[]>([]);

export const useSpells = () => {
  const [spells, setSpells] = useAtom(localAtom);
  const spellIds = spells.map((x) => x.id);

  const reset = (newSpells: Spell[]) => {
    setSpells(newSpells);
  };

  const add = (newSpell: Spell) => {
    setSpells((old) => [...old, newSpell]);
  };

  const remove = (toRemove: Spell) => {
    setSpells((old) => old.filter((x) => x.id != toRemove.id));
  };

  const contains = (spell: Spell) => {
    return spellIds.includes(spell.id);
  };

  return { spells, reset, add, remove, contains };
};
