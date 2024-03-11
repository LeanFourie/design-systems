import { mount } from '@vue/test-utils';
import AvatarGroup from './avatar-group.vue';

describe('AvatarGroup', () => {
  it('renders properly', () => {
    const wrapper = mount(AvatarGroup, {});
    expect(wrapper.text()).toContain('Welcome to AvatarGroup');
  });
});
