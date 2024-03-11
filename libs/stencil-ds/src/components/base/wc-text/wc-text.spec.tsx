import { newSpecPage } from '@stencil/core/testing';
import { WcText } from './wc-text';

describe('wc-text', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WcText],
      html: '<wc-text></wc-text>',
    });
    expect(root).toEqualHtml(`
      <wc-text>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </wc-text>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WcText],
      html: `<wc-text first="Stencil" last="'Don't call me a framework' JS"></wc-text>`,
    });
    expect(root).toEqualHtml(`
      <wc-text first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </wc-text>
    `);
  });
});
