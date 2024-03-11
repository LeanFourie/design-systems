import { newSpecPage } from '@stencil/core/testing';
import { WcAccordion } from './wc-accordion';

describe('wc-accordion', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WcAccordion],
      html: '<wc-accordion></wc-accordion>',
    });
    expect(root).toEqualHtml(`
      <wc-accordion>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </wc-accordion>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WcAccordion],
      html: `<wc-accordion first="Stencil" last="'Don't call me a framework' JS"></wc-accordion>`,
    });
    expect(root).toEqualHtml(`
      <wc-accordion first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </wc-accordion>
    `);
  });
});
