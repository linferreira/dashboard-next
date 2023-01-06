import React from "react";
import { Aside, Content, MainHeader } from "..";
import * as S from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </S.Grid>
  );
}
