import { SpellbookState, SpellbookAction } from "../types/spellTypes"; //не забыть дописать в spellTypes

export const spellbookReducer = (
  state: SpellbookState,
  action: SpellbookAction
): SpellbookState => {
  switch (action.type) {
    case "ADD_SPELL":
      return {
        ...state,
        spellbook: [
          ...state.spellbook,
          { spell: action.spell, prepared: false },
        ],
      };
    case "TOGGLE_PREPARE_SPELL":
      return {
        ...state,
        spellbook: state.spellbook.map((entry) =>
          entry.spell.id === action.spellId
            ? { ...entry, prepared: !entry.prepared }
            : entry
        ),
      };
    case "CAST_SPELL": {
      const level = action.spell.level;
      const isConcentration = action.spell.concentration;
      return {
        ...state,
        spellSlots: {
          ...state.spellSlots,
          [level]: {
            ...state.spellSlots[level],
            used: Math.min(
              state.spellSlots[level].used + 1,
              state.spellSlots[level].max
            ),
          },
        },
        activeConcentration: isConcentration
          ? action.spell
          : state.activeConcentration,
      };
    }
    case "RESTORE_SLOT": {
      const level = action.level;
      return {
        ...state,
        spellSlots: {
          ...state.spellSlots,
          [level]: {
            ...state.spellSlots[level],
            used: Math.max(0, state.spellSlots[level].used - 1),
          },
        },
      };
    }
    case "CLEAR_CONCENTRATION":
      return {
        ...state,
        activeConcentration: undefined,
      };
    default:
      return state;
  }
};
