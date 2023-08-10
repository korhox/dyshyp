import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/ui/Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    style: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  // todo: why args is not assignable to button props?
  // Type '{ label: string; }' is not assignable to type 'Partial<{ label: string; 
  args: {
    label: 'Button',
  },
};