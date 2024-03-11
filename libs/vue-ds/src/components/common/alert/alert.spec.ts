import { mount } from '@vue/test-utils';
import Alert from './alert.vue';

describe('Alert', () => {
  it('renders properly', () => {
    const wrapper = mount(Alert, {});
    expect(wrapper.text()).toContain('Welcome to Alert');
  });
});
