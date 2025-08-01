export type Spell = {
  id: string;
  name: string;
  level: number; // 0 = cantrip
  school: string;
  castingTime: string;
  range: string;
  duration: string;
  components: string;
  description: string;
  concentration: boolean;
};

export type SpellEntry = {
  spell: Spell;
  prepared: boolean;
};

export type SpellSlot = {
  max: number;
  used: number;
};

export type SpellSlots = {
  [level: number]: SpellSlot; // e.g. { 1: { max: 4, used: 1 }, 2: { ... } }
};

export type SpellbookState = {
  spellbook: SpellEntry[];
  preparedSpells: Spell[]; // Optional: may not be strictly necessary if using spellbook.prepared
  cantrips: Spell[];
  spellSlots: SpellSlots;
  activeConcentration?: Spell;
};

export type SpellbookAction =
  | { type: "ADD_SPELL"; spell: Spell }
  | { type: "TOGGLE_PREPARE_SPELL"; spellId: string }
  | { type: "CAST_SPELL"; spell: Spell }
  | { type: "RESTORE_SLOT"; level: number }
  | { type: "CLEAR_CONCENTRATION" };
