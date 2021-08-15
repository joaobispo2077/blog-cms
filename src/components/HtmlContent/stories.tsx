import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlContent, HtmlContentProps } from '.';
import mockedHtmlContent from './mock';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: mockedHtmlContent,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <HtmlContent {...args} />
    </div>
  );
};
