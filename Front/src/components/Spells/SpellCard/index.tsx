import cs from "classnames";
import React, { type FC } from "react";

import type { Spell } from "../../../api";
import { useTranslate } from "../../../hooks";
import { Paragraph } from "../../Paragraph";
import styles from "./styles.module.css";

type Props = {
  spell: Spell;
  chosen: boolean;
  children?: React.ReactNode;
};

export const SpellCard: FC<Props> = ({ spell, chosen, children }) => {
  const translate = useTranslate();

  return (
    <div
      className={cs(
        styles.holder,
        "border",
        "p-2",
        "rounded",
        "shadow-sm",
        chosen ? "bg-purple-100" : "bg-white",
      )}
    >
      <h3 className="text-lg font-bold">{spell.name}</h3>
      <Paragraph>{spell.school}</Paragraph>
      <Paragraph>
        {translate("spell-card.level")} {spell.level}
      </Paragraph>
      <Paragraph>
        {translate("spell-card.duration")} {spell.duration}
      </Paragraph>
      <Paragraph>
        {translate("spell-card.casting-time")}
        {spell.castingTime}
      </Paragraph>
      <Paragraph>
        {translate("spell-card.components")} {spell.components}
      </Paragraph>
      <Paragraph>
        {translate("spell-card.range")} {spell.range}
      </Paragraph>
      <Paragraph>{spell.description}</Paragraph>
      <Paragraph>
        {translate("spell-card.at-higher-levels")} {spell.atHigherLevels}
      </Paragraph>
      {spell.concentration && (
        <span className="text-xs text-red-500">
          {translate("spell-card.concentration")}
        </span>
      )}
      {children && <div className="flex gap-2 mt-2">{children}</div>}
    </div>
  );
};
