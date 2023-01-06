import React from "react";
import * as S from "./styles";
import Toogle from "react-switch";
import { useTheme } from "@/hooks/useTheme";

interface ISwitchProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

export default function Switch({
  labelLeft,
  labelRight,
  checked,
  onChange,
}: ISwitchProps) {
  const theme = useTheme();
  return (
    <S.Container>
      <S.SwitchLabel>{labelLeft}</S.SwitchLabel>
      <Toogle
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checked}
        onChange={onChange}
        onColor={theme.colors.info}
        offColor={theme.colors.warning}
      />
      <S.SwitchLabel>{labelRight}</S.SwitchLabel>
    </S.Container>
  );
}
