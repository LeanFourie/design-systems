import { newSpecPage } from '@stencil/core/testing';
import { WcIcon } from './wc-icon';

describe('wc-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WcIcon],
      html: '<wc-icon></wc-icon>',
    });
    expect(root).toEqualHtml(`
      <wc-icon>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </wc-icon>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WcIcon],
      html: `<wc-icon first="Stencil" last="'Don't call me a framework' JS"></wc-icon>`,
    });
    expect(root).toEqualHtml(`
      <wc-icon first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </wc-icon>
    `);
  });
});
