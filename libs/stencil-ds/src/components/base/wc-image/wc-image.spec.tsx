import { newSpecPage } from '@stencil/core/testing';
import { WcImage } from './wc-image';

describe('wc-image', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WcImage],
      html: '<wc-image></wc-image>',
    });
    expect(root).toEqualHtml(`
      <wc-image>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </wc-image>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WcImage],
      html: `<wc-image first="Stencil" last="'Don't call me a framework' JS"></wc-image>`,
    });
    expect(root).toEqualHtml(`
      <wc-image first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </wc-image>
    `);
  });
});
