import * as Styled from './styles';
import React from 'react';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent: React.FC<HtmlContentProps> = ({
  html,
}: HtmlContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};
