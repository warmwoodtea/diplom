import { useEffect, useState } from "react";
import { LoadSpells, type Spell } from "../../api";

export const useLoadSpells = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const newSpells = await LoadSpells();
      setSpells(newSpells);
    } finally {
      setLoading(false);
    }
  };

  return { spells, loading };
};
