import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: CT;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};

    padding: ${theme.spacing[7]};

    height: calc(100vh - 70px);

    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: ${theme.spacing[3]};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: ${theme.spacing[3]};
      background-color: ${theme.colors.tertiary};
    }

    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.secondary};
    }
  `}
`;
