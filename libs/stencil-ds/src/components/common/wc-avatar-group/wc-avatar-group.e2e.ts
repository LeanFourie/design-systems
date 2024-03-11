import { newE2EPage } from '@stencil/core/testing';

describe('wc-avatar-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<wc-avatar-group></wc-avatar-group>');
    const element = await page.find('wc-avatar-group');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<wc-avatar-group></wc-avatar-group>');
    const component = await page.find('wc-avatar-group');
    const element = await page.find('wc-avatar-group >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
