import { newSpecPage } from '@stencil/core/testing';
import { WcAvatar } from './wc-avatar';

describe('wc-avatar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WcAvatar],
      html: '<wc-avatar></wc-avatar>',
    });
    expect(root).toEqualHtml(`
      <wc-avatar>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </wc-avatar>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WcAvatar],
      html: `<wc-avatar first="Stencil" last="'Don't call me a framework' JS"></wc-avatar>`,
    });
    expect(root).toEqualHtml(`
      <wc-avatar first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </wc-avatar>
    `);
  });
});
