import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { spellbookReducer } from ""; //нужен путь блять
import { SpellbookState, SpellbookAction } from "../types/spellTypes"; //дописать в spellTypes.ts

const initialState: SpellbookState = {
  spellbook: [],
  preparedSpells: [],
  cantrips: [],
  spellSlots: {
    1: { max: 4, used: 0 },
    2: { max: 3, used: 0 },
    3: { max: 2, used: 0 },
  },
  activeConcentration: undefined,
};

const SpellbookContext = createContext<
  | {
      state: SpellbookState;
      dispatch: React.Dispatch<SpellbookAction>;
    }
  | undefined
>(undefined);

export const SpellbookProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(spellbookReducer, initialState);

  return (
    <SpellbookContext.Provider value={{ state, dispatch }}>
      {children}
    </SpellbookContext.Provider>
  );
};

export const useSpellbook = () => {
  const context = useContext(SpellbookContext);
  if (!context) {
    throw new Error("useSpellbook must be used within a SpellbookProvider");
  }
  return context;
};
