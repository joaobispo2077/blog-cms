import { createGlobalStyle } from 'styled-components';

const GloblaStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
    scroll-behavior: smooth;
	}

	body {
		font-size: 1.6rem;
		font-family: ${({ theme }) => theme.font.family.secondary};
    color: ${({ theme }) => theme.colors.secondary}
	}

  *, input, button, h1, h2, h3, h4, h5, h6 {
    font-family:${({ theme }) => theme.font.family.primary};
    color: ${({ theme }) => theme.colors.primary}

  }

	h1, h2, h3, h4, h5, h6 {
    margin: ${({ theme }) => theme.spacings.large} 0;
    font-weight: 800;
	}

	p {
		margin: ${({ theme }) => theme.spacings.medium} 0;
	}

	ul, ol {
		margin: ${({ theme }) => theme.spacings.medium} 0;
		padding: ${({ theme }) => theme.spacings.medium} 0;
	}

	a {
		color: ${({ theme }) => theme.colors.secondary}
	}

	.table {
		width: 100%;
		overflow-y: auto;
	}


`;

export default GloblaStyles;
