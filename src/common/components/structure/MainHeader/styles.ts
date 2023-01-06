import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme }) => css`
    grid-area: MH;

    background-color: ${theme.colors.secondary};

    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 0 10px;

    border-bottom: 1px solid ${theme.colors.gray};
  `}
`;

export const Profile = styled.span`
  color: ${(props) => props.theme.colors.white};
`;
