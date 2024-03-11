import type { Meta, StoryObj } from '@storybook/vue3';
import avatarGroup from './avatar-group.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof avatarGroup> = {
  component: avatarGroup,
  title: 'avatarGroup',
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
    await expect(canvas.getByText(/Welcome to avatarGroup!/gi)).toBeTruthy();
  },
};
