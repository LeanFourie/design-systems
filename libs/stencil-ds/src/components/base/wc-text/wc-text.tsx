import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-text',
  styleUrl: 'wc-text.scss',
  shadow: true,
})
export class WcText {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
