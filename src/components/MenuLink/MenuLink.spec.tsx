import { render, screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';

describe('<MenuLink/>', () => {
  it('should render with target _self', () => {
    render(renderTheme(<MenuLink link="http://localhost" text={'Texto'} />));

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
  });

  it('should render with target _self', () => {
    render(
      renderTheme(
        <MenuLink link="http://google.com.br" newTab text={'Texto'} />,
      ),
    );

    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });

  it('should match with snapshot', () => {
    const { container } = render(
      renderTheme(<MenuLink link="http://google.com.br" text={'Texto'} />),
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  display: block;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 1.6rem;
  color: #e1ebed;
  -webkit-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;
  margin-bottom: 1.6rem;
}

.c0:hover,
.c0.active {
  border-right: 0.5rem solid #00bcf0;
  color: #00bcf0;
}

<a
  class="c0"
  href="http://google.com.br"
  target="_self"
>
  Texto
</a>
`);
  });
});
