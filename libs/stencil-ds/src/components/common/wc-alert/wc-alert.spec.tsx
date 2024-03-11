import { newSpecPage } from '@stencil/core/testing';
import { WcAlert } from './wc-alert';

describe('wc-alert', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WcAlert],
      html: '<wc-alert></wc-alert>',
    });
    expect(root).toEqualHtml(`
      <wc-alert>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </wc-alert>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WcAlert],
      html: `<wc-alert first="Stencil" last="'Don't call me a framework' JS"></wc-alert>`,
    });
    expect(root).toEqualHtml(`
      <wc-alert first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </wc-alert>
    `);
  });
});
