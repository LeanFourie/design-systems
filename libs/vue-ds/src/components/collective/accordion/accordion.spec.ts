import { mount } from '@vue/test-utils';
import Accordion from './accordion.vue';

describe('Accordion', () => {
  it('renders properly', () => {
    const wrapper = mount(Accordion, {});
    expect(wrapper.text()).toContain('Welcome to Accordion');
  });
});
