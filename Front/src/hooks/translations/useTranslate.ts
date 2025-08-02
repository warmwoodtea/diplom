import en from "./langs/en.json";

export const useTranslate = () => {
  const handleTranslate = (t: string) => {
    const found = (en as any)[t];

    if (!found) return t;

    return found;
  };

  return handleTranslate;
};
