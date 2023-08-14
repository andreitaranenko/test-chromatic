import type { Meta, StoryObj } from '@storybook/angular';
import { TestButtonComponent } from './test-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TestButtonComponent> = {
  component: TestButtonComponent,
  title: 'TestButtonComponent',
};
export default meta;
type Story = StoryObj<TestButtonComponent>;

export const Primary: Story = {
  argTypes: {
    label: {
      control: 'text'
    },
    color: {
      control: 'text'
    }
  },
  args: {
    label: 'button',
    color: 'black'
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/test-button works!/gi)).toBeTruthy();
  },
};
