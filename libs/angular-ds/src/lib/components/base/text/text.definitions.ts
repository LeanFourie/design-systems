// #region - IMPORTS
import type { TSize } from '@agensea-design-systems/utils';
// #endregion

// #region - TYPES
/**
 * Stores the available props on the text component.
 */
type TTextProps = IText;
/**
 * Sets the available text type values on the text component.
 */
type TTextType =
  | 'heading'
  | 'sub-heading'
  | 'body';
/**
 * Sets the available text variant options that can be set on the component.
 */
type TTextVariant =
  | `${ TTextType } ${ TSize }`
  | 'tagline'
  | 'quote';
/**
 * Sets the available HTML text tag elements that cen be rendered.
 */
type TTextTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'label'
  | 'caption'
  | 'span'
  | 'blockquote';
/**
 * Sets the available font weight options that can be set on the component.
 */
type TTextWeight =
  | 'thin'
  | 'extra light'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semi bold'
  | 'bold'
  | 'extra bold'
  | 'black';
/**
 * Sets additional HTML tags that can be rendered for the component.
 */
type TTextSpecialTag =
  | 'span'
  | 'label'
  | 'caption';
/**
 * Sets the available text decoration options that can be set on the component.
 */
type TTextDecoration =
  | 'none'
  | 'underline'
  | 'line through';
/**
 * Sets the available font style options that can be set on the component.
 */
type TTextStyle =
  | 'unset'
  | 'italic';
/**
 * Sets the available text transform options that can be set on the component.
 */
type TTextCasing =
  | 'unset'
  | 'lowercase'
  | 'uppercase';
// #endregion

// #region - INTERFACES
/**
 * Lists the props available on the text component.
*/
interface IText {
  /**
   * Sets the visual casing of the text.
   * Updates the CSS `text-transform` property.
   * 
   * @default 'unset'
   */
  casing?: TTextCasing;
  /**
   * Adds additional CSS classes to the component.
   * 
   * @default undefined
   */
  className?: string;
  /**
   * Sets a visible decorative element on the component.
   * Updates the CSS `text-decoration` property.
   * 
   * @default 'none'
   */
  decoration?: TTextDecoration;
  /**
   * Updates the HTML tag of the component.
   * 
   * @default undefined
   */
  renderAs?: TTextSpecialTag;
  /**
   * Sets the visual style of the component.
   * Updates the CSS `font-style` property.
   * 
   * @default 'unset'
   */
  style?: TTextStyle;
  /**
   * Determines the HTML tag and default CSS values to render for the component.
   * 
   * @default 'body md'
   */
  variant?: TTextVariant;
  /**
   * Sets the visible weight of the component characters.
   * Updates the CSS `font-weight` property.
   * 
   * @default undefined
   */
  weight?: TTextWeight;
}
// #endregion

// #region - EXPORTS
export type {
  TTextProps,
  TTextTag
};
// #endregion