'use client'

// Packages & Modules
import { toSnakeCase } from '@agensea-design-systems/utils';
import styles from './text.module.scss';
import {
  useEffect,
  useState
} from 'react';

// Definitions
import type {
  TTextProps,
  TTextTag
} from './text.definitions';
import type { PropsWithChildren } from 'react';

// Component
export const Text = (props: PropsWithChildren<TTextProps>): JSX.Element => {
  // #region - PROPS
  const {
    casing = 'unset',
    children,
    className,
    decoration = 'none',
    renderAs,
    style = 'unset',
    variant = 'body md',
    weight
  } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'text';
  // #endregion
  
  // #region - STATES
  /**
   * Stores the HTML tag element to render.
   */
  const [
    _tag,
    _setTag
  ] = useState<TTextTag>();
  /**
   * Stores the font weight value to render.
   */
  const [
    _fontWeight,
    _setFontWeight
  ] = useState<TTextProps['weight']>();
  // #endregion

  // #region - METHODS
  /**
   * Sets the appropriate HTML tag based on the 'renderAs' and 'variant' props.
   * 
   * @returns { void } - Returns nothing.
   */
  const setTag = (): void => {
    switch (true) {
      case (
        renderAs &&
        renderAs === 'label'
      ):
        _setTag('label');
        break;
      case (
        renderAs &&
        renderAs === 'span'
      ):
        _setTag('span');
        break;
      case (
        renderAs &&
        renderAs === 'caption'
      ):
        _setTag('caption');
        break;
      case variant === 'quote':
        _setTag('blockquote');
        break;
      case variant === 'heading lg':
        _setTag('h1');
        break;
      case variant === 'heading md':
        _setTag('h2');
        break;
      case variant === 'heading sm':
        _setTag('h3');
        break;
      case variant === 'sub-heading lg':
        _setTag('h4');
        break;
      case variant === 'sub-heading md':
        _setTag('h5');
        break;
      case (
        variant === 'sub-heading sm' ||
        variant === 'tagline'
      ):
        _setTag('h6');
        break;
      default:
        _setTag('p');
        break;
    };
  }
  /**
   * Sets the appropriate font weight based on the 'variant' prop.
   * 
   * @returns { void } - Returns nothing.
   */
  const setFontWeight = (): void => {
    switch (true) {
      case variant === 'heading lg':
        _setFontWeight('extra bold');
        break;
      case (
        variant === 'heading md' ||
        variant === 'heading sm' ||
        variant === 'quote'
      ):
        _setFontWeight('bold');
        break;
      case (
        variant === 'sub-heading lg' ||
        variant === 'sub-heading md'
      ):
        _setFontWeight('semi bold');
        break;
      case variant === 'sub-heading sm':
        _setFontWeight('medium');
        break;
      default:
        _setFontWeight('regular');
        break;
    };
  }
  // #endregion

  // #region - EFFECTS
  useEffect(() => {
    setTag();
  }, [
    renderAs,
    variant,
  ]);

  useEffect(() => {
    if (!weight) {
      setFontWeight();
    } else {
      _setFontWeight(weight);
    }
  }, [
    variant,
    weight
  ]);
  // #endregion

  // #region - HTML
  return (
    <>
      {(_tag) && (
        <_tag
          className={`
            ${ styles[baseClass] }
            ${ styles[`${ baseClass }--casing-${ toSnakeCase(casing) }`] }
            ${ styles[`${ baseClass }--decoration-${ toSnakeCase(decoration) }`] }
            ${ styles[`${ baseClass }--style-${ toSnakeCase(style) }`] }
            ${ styles[`${ baseClass }--variant-${ toSnakeCase(variant) }`] }
            ${ styles[`${ baseClass }--weight-${ toSnakeCase(_fontWeight || 'regular') }`] }
            ${ className ? className : '' }
          `}
        >
          { children }
        </_tag>
      )}
    </>
  );
  // #endregion
}
