import { mount } from '@vue/test-utils';
import Avatar from './avatar.vue';

describe('Avatar', () => {
  it('renders properly', () => {
    const wrapper = mount(Avatar, {});
    expect(wrapper.text()).toContain('Welcome to Avatar');
  });
});
