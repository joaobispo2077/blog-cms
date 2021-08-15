import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};

    transition: all 250ms ease-in-out;

    margin-bottom: ${theme.spacings.small};

    &:hover,
    &.active {
      border-right: 0.5rem solid ${theme.colors.tertiary};
      color: ${theme.colors.tertiary};
    }
  `}
`;
