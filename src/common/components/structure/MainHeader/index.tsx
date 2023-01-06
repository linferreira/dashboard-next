import React, { useState, useMemo } from "react";

import * as S from "./styles";

export default function MainHeader() {
  return (
    <S.Container>
      <S.Profile>
        <h3>Olá,</h3>
        <p>Lindsay</p>
      </S.Profile>
    </S.Container>
  );
}
