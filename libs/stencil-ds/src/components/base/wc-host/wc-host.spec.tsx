import { newSpecPage } from '@stencil/core/testing';
import { WcHost } from './wc-host';

describe('wc-host', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WcHost],
      html: '<wc-host></wc-host>',
    });
    expect(root).toEqualHtml(`
      <wc-host>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </wc-host>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WcHost],
      html: `<wc-host first="Stencil" last="'Don't call me a framework' JS"></wc-host>`,
    });
    expect(root).toEqualHtml(`
      <wc-host first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </wc-host>
    `);
  });
});
