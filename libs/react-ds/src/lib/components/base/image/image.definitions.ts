// #region - TYPES
/**
 * Image Fit Options
 * 
 * Determines how the image will be sized and positioned inside its parent container.
 */
type TImageFit =
  | 'cover'
  | 'contain';
/**
 * Defines the properties required for the Image component.
 */
type TImageProps = IImage;
// #endregion

// #region - INTERFACES
/**
 * Defines the default properties for the Image component.
 */
interface IImage {
  // Required
  /**
   * Alternative text for the image component, used for accessibility.
   */
  alt: string;
  /**
   * Source (route) of the asset to be rendered by the Image component.
   */
  src: string;
  
  // Optional
  /**
   * Additional CSS classes to apply to the Image component.
   */
  className?: string;
  /**
   * Determines how the image will be sized and positioned inside its parent container.
   * 
   * @default 'contain'
   */
  fit?: TImageFit;
}
// #endregion

// #region - EXPORTS
export type { TImageProps };
// #endregion