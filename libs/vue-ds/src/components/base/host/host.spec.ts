import { mount } from '@vue/test-utils';
import Host from './host.vue';

describe('Host', () => {
  it('renders properly', () => {
    const wrapper = mount(Host, {});
    expect(wrapper.text()).toContain('Welcome to Host');
  });
});
