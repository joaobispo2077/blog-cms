import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    p {
      margin: ${theme.spacings.xlarge} 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.tertiary};
      transition: filter 250ms ease-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    pre {
      background: ${theme.colors.darkblue};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.secondary};
      margin: ${theme.spacings.xlarge} 0;
      width: 100%;
      overflow-x: auto;
    }

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.gray};
      line-height: 0;
      margin: ${theme.spacings.xlarge} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side img {
      float: right;
      max-width: 50%;
      margin: ${theme.spacings.medium};
    }

    ul,
    ol {
      margin: ${theme.spacings.xlarge};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.gray};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.gray};
    }

    @media ${theme.media.lteMedium} {
      .image-style-side img {
        float: none;
        max-width: 100%;
        margin: ${theme.spacings.medium};
      }
    }
  `}
`;
