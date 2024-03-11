import type { Meta, StoryObj } from '@storybook/vue3';
import icon from './icon.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof icon> = {
  component: icon,
  title: 'icon',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to icon!/gi)).toBeTruthy();
  },
};
