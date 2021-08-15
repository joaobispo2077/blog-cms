import * as Styled from './styles';

import { HtmlContent } from '../HtmlContent';

export type FooterProps = {
  html: string;
};

export const Footer = ({ html }: FooterProps) => {
  return (
    <Styled.Container>
      <HtmlContent html={html} />
    </Styled.Container>
  );
};
