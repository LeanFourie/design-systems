import { newSpecPage } from '@stencil/core/testing';
import { WcAvatarGroup } from './wc-avatar-group';

describe('wc-avatar-group', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WcAvatarGroup],
      html: '<wc-avatar-group></wc-avatar-group>',
    });
    expect(root).toEqualHtml(`
      <wc-avatar-group>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </wc-avatar-group>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WcAvatarGroup],
      html: `<wc-avatar-group first="Stencil" last="'Don't call me a framework' JS"></wc-avatar-group>`,
    });
    expect(root).toEqualHtml(`
      <wc-avatar-group first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </wc-avatar-group>
    `);
  });
});
