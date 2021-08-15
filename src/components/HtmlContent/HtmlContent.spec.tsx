import { render, screen } from '@testing-library/react';
import { HtmlContent } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
import { theme } from '../../styles/themes';

describe('<HtmlContent/>', () => {
  it('should render', () => {
    render(renderTheme(<HtmlContent html="Texto" />));

    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should have correct size', () => {
    render(renderTheme(<HtmlContent html="Texto" />));

    const text = screen.queryByText('Texto');

    expect(text).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should match with snapshot', () => {
    const { container } = render(renderTheme(<HtmlContent html="Texto" />));

    expect(container.firstChild).toMatchInlineSnapshot(`
		.c0 {
		  font-size: 2.4rem;
		}

		<footer
		  class="c0"
		>
		  Texto
		</footer>
	`);
  });
});
