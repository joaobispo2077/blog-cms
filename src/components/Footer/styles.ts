import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.darkblue};
    font-size: ${theme.font.sizes.small};

    a {
      color: inherit;
      text-decoration: none;
    }
  `}
`;
