import { LogoLink, LogoLinkProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'testing',
    src: 'https://github.com/joaobispo2077.png',
    link: 'http://localhost:6006',
  },
  argTypes: {
    link: { type: 'string' },
    text: { type: 'string' },
    src: { type: 'string' },
  },
} as Meta;

export const WithImage: Story<LogoLinkProps> = (args) => {
  return <LogoLink {...args} />;
};

export const OnlyText: Story<LogoLinkProps> = (args) => {
  return <LogoLink {...args} />;
};

OnlyText.args = {
  src: '',
};
