// #region - TYPES
/**
* Defines the properties required for the Icon component.
*/
type TIconProps = 
  | IIconText
  | IIconSvg;
/**
* Defines the available types of icons that can be rendered: 'text' or 'svg'.
*/
type TIconType =
  | 'text'
  | 'svg';
// #endregion

// #region - INTERFACES
/**
* Defines the default properties for the Icon component.
*/
interface IIcon {
  // Required
  /**
   * The name of the Material Symbol to render for the text icon OR
   * The source (route) of the SVG icon to render
   */
  value: string;

  // Optional
  /**
   * Additional CSS classes to apply to the icon component.
   */
  className?: string;
}

/**
* Defines the properties required for the Text Icon component.
*/
interface IIconText extends IIcon {
  // Required
  /**
   * Specifies the type of the icon component as 'text'.
   */
  type: Extract<
    TIconType,
    'text'
  >;
}

/**
 * Defines the properties required for the SVG Icon component.
 */
interface IIconSvg extends IIcon {
  // Required
  /**
   * Specifies the type of the icon component as 'svg'.
   */
  type: Extract<
    TIconType,
    'svg'
  >;
}
// #endregion

// #region - EXPORTS
export type { TIconProps };
// #endregion
