import { mount } from '@vue/test-utils';
import Icon from './icon.vue';

describe('Icon', () => {
  it('renders properly', () => {
    const wrapper = mount(Icon, {});
    expect(wrapper.text()).toContain('Welcome to Icon');
  });
});
