import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface IContainerProps {
  menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
  ${({ theme, menuIsOpen }) => css`
    grid-area: AS;
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};

    padding-left: ${theme.spacing[6]};

    border-right: 1px solid ${theme.colors.gray};

    position: relative;

    @media (max-width: 600px) {
      padding-left: ${theme.spacing[5]};
      position: fixed;
      z-index: 2;

      width: 170px;

      height: ${menuIsOpen ? "100vh" : "70px"};

      overflow: hidden;

      ${!menuIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${theme.colors.gray};
      `}
    }
  `}
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const ToogleMenu = styled.button`
  ${({ theme }) => css`
    height: 40px;
    width: 40px;

    display: none;

    color: ${theme.colors.white};

    border-radius: ${theme.spacing[2]};

    font-size: ${theme.typography.font.size.lg};

    background-color: ${theme.colors.warning};

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-left: 10px;

    @media (max-width: 600px) {
      display: none;
    }
  `}
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.colors.info};
    text-decoration: none;

    margin: 7px 0;

    transition: opacity 0.3;

    &:hover {
      opacity: 0.7;
    }

    > svg {
      font-size: ${theme.typography.font.size.md};
      margin-right: 7px;
    }
  `}
`;

export const MenuItemButton = styled.button`
${({ theme }) => css`  

  font-size: ${theme.typography.font.size.xs};
  color: ${theme.colors.info};

  display: flex;
  align-items: center;

  border: none;
  background: none;

  margin: 7px 0;

  transition: opacity 0.3;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: md;
    margin-right: 7px;
  }`}
`;