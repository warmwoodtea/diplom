export type Spell = {
  id: number;
  name: string;
  level: number; // 0 = cantrip
  school: string;
  castingTime: number;
  range: string;
  duration: string;
  components: string;
  description: string;
  atHigherLevels: string;
  concentration: boolean;
};

export const LoadSpells = () =>
  new Promise<Spell[]>((res) => {
    res([
      {
        id: 0,
        name: "fill-me-of-luck",
        castingTime: 1,
        description: "фывфывфывфывфы",
        duration: "две тыщщи лет",
        level: 1,
        range: "qwe",
        school: "23 им М. Козыбаева",
        concentration: false,
        components: "asdasd",
        atHigherLevels: "asdasd",
      },
      {
        id: 1,
        name: "fill-me-of-luck",
        castingTime: 23,
        description: "фывфывфывфывфы",
        duration: "две тыщщи лет",
        level: 1,
        range: "qwe",
        school: "23 им М. Козыбаева",
        concentration: false,
        components: "asdasd",
        atHigherLevels: "asdasd",
      },
      {
        id: 2,
        name: "fill-me-of-luck",
        castingTime: 32,
        description: "фывфывфывфывфы",
        duration: "две тыщщи лет",
        level: 1,
        range: "qwe",
        school: "23 им М. Козыбаева",
        concentration: false,
        components: "asdasd",
        atHigherLevels: "asdasd",
      },
    ]);
  });
