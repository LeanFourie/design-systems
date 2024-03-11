import type { Meta, StoryObj } from '@storybook/vue3';
import avatar from './avatar.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof avatar> = {
  component: avatar,
  title: 'avatar',
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
    await expect(canvas.getByText(/Welcome to avatar!/gi)).toBeTruthy();
  },
};
