import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis soluta aliquid tempora magnam deleniti, consectetur nostrum aperiam similique deserunt non recusandae nemo eligendi fugit iure voluptatum facilis assumenda! Quas, repudiandae.',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => {
  return <HtmlContent {...args} />;
};
