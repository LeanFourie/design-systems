import { newSpecPage } from '@stencil/core/testing';
import { WcAccordionItem } from './wc-accordion-item';

describe('wc-accordion-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WcAccordionItem],
      html: '<wc-accordion-item></wc-accordion-item>',
    });
    expect(root).toEqualHtml(`
      <wc-accordion-item>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </wc-accordion-item>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WcAccordionItem],
      html: `<wc-accordion-item first="Stencil" last="'Don't call me a framework' JS"></wc-accordion-item>`,
    });
    expect(root).toEqualHtml(`
      <wc-accordion-item first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </wc-accordion-item>
    `);
  });
});
