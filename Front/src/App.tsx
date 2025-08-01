import React, { useState } from "react";
import { SpellbookScreen } from "./features/Spellbook/SpellbookScreen";
import { SlotsScreen } from "./features/Slots/SlotsScreen";
import { LibraryScreen } from "./features/Library/LibraryScreen";

const App: React.FC = () => {
  const [tab, setTab] = useState<"spellbook" | "slots" | "library">(
    "spellbook"
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">📖 D&D Spellbook</h1>
        <nav className="flex gap-4 mt-2">
          <button
            onClick={() => setTab("spellbook")}
            className={tab === "spellbook" ? "font-bold" : ""}
          >
            Spellbook
          </button>
          <button
            onClick={() => setTab("slots")}
            className={tab === "slots" ? "font-bold" : ""}
          >
            Slots
          </button>
          <button
            onClick={() => setTab("library")}
            className={tab === "library" ? "font-bold" : ""}
          >
            Library
          </button>
        </nav>
      </header>
      {tab === "spellbook" && <SpellbookScreen />}
      {tab === "slots" && <SlotsScreen />}
      {tab === "library" && <LibraryScreen />}
    </div>
  );
};

export default App;
