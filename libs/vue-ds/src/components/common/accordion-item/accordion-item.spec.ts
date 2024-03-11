import { mount } from '@vue/test-utils';
import AccordionItem from './accordion-item.vue';

describe('AccordionItem', () => {
  it('renders properly', () => {
    const wrapper = mount(AccordionItem, {});
    expect(wrapper.text()).toContain('Welcome to AccordionItem');
  });
});
