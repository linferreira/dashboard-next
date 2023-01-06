import React from "react";
import { Container } from "./styles";

type ContentProps = {
  children: React.ReactNode;
};

export default function Content({ children }: ContentProps) {
  return <Container>{children}</Container>;
}
