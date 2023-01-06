import Image from "next/image";
import React, { useState } from "react";
import * as S from "./styles";
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdKeyboardTab,
  MdClose,
  MdMenu,
} from "react-icons/md";


export default function Aside() {
  const [toogleMenuIsOpened, setToogleMenuIsOpened] = useState(false);

  function handleToogleMenu() {
    setToogleMenuIsOpened(!toogleMenuIsOpened);
  }

  return (
    <S.Container menuIsOpen={toogleMenuIsOpened}>
      <S.Header>
        <S.ToogleMenu onClick={handleToogleMenu}>
          {toogleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </S.ToogleMenu>

        <S.Title>Minha Carteira</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>

        <S.MenuItemLink href="/">
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>

        <S.MenuItemLink href="/">
          <MdArrowDownward />
          Saídas
        </S.MenuItemLink>

        <S.MenuItemButton>
          <MdKeyboardTab /> Sair
        </S.MenuItemButton>
      </S.MenuContainer>
    </S.Container>
  );
}
