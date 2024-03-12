// // IMPORTS
// import type {
//   TColor,
//   TShade,
//   TSocialLink
// } from '../../';
// import type { JSX } from 'react';

// // INTERFACES
// /**
//  * Sets the properties needed for social media links
//  */
// interface ISocialLink {
//   /**
//    * Sets the icon src URL on the link
//    */
//   icon: string;
//   /**
//    * Sets the name of the social media platform
//    */
//   name: string;
//   /**
//    * Sets the platform type
//    * This is the platform ID
//    * Derived value from the platform name
//    */
//   type: TSocialLink;
//   /**
//    * The URL the user will be directed to once they have clicked the link
//    */
//   url: string;
// }

// /**
//  * Sets the properties needed for images
//  */
// interface IImage {
//   /**
//    * The alternative text needed to be rendered on the image
//    */
//   alt: string;
//   /**
//    * The image source URL
//    */
//   src: string;
// }

// /**
//  * Stores x and y coordinate values
//  */
// interface IPosition {
//   /**
//    * The x axis coordinate value
//    */
//   x: number;
//   /**
//    * The y axis coordinate value
//    */
//   y: number;
// }

// /**
//  * Stores the default interface props for product variant options
//  */
// interface IProductVariant {
//   /**
//    * Stores the variant options to render
//    */
//   options: IProductVariantOption[];
//   /**
//    * Stores the collective name of the variant options
//    */
//   title: string;
// }

// /**
//  * Stores the default interface props for product variant options
//  */
// interface IProductVariantOption {
//   // Required
//   /**
//    * Stores the ID value of the variant option
//    */
//   id: string;
//   /**
//    * Stores the label value of the variant option
//    */
//   label: string;

//   // Optional
//   /**
//    * Determines whether the option is selectable or not
//    */
//   isDisabled?: boolean;
// }

// /**
//  * Sets the required props for the product price interface
//  */
// interface IProductPrice {
//   // Required
//   /**
//    * The default price of the product
//    */
//   default: number;

//   // Optional
//   /**
//    * The amount of discount applied to the price ( percentage value )
//    */
//   discount?: number;
//   /**
//    * The sale price of the product
//    */
//   sale?: number;
// }

// /**
// * Sets the base required props for product badges.
// */
// interface IProductBadgeBase {
//   /**
//    * Sets the string value for the badge label
//    */
//   label: string;
//   /**
//   * Determines the color of the badge
//   */
//   color?: TColor;
//   /**
//   * Determines the shade of the badge
//   */
//   shade?: TShade;
// }

// /**
// * Sets the required props for section components with an image.
// */
// interface ISectionWithImage {
//   /**
//    * Sets the properties for the section image.
//    */
//   image: IImage;
// }

// /**
// * Sets the required props for section components with a video.
// */
// interface ISectionWithVideo {
//   // Required
//   /**
//    * Sets source route for the video element.
//    */
//   videoUri: string;

//   // Optional
//   /**
//    * If set to true, the video will automatically play.
//    */
//   autoPlay?: boolean;
//   /**
//    * If set, a cover image will render before the video plays.
//    */
//   coverImageUri?: string;
// }

// /**
// * Sets the required props for section components with a custom background.
// */
// interface ISectionWithCustomBackground {
//   /**
//    * Renders a custom background using a JSX Element.
//    */
//   background: JSX.Element;
// }

// // EXPORTS
// export type {
//   IImage,
//   IPosition,
//   IProductBadgeBase,
//   IProductPrice,
//   IProductVariant,
//   IProductVariantOption,
//   ISectionWithCustomBackground,
//   ISectionWithImage,
//   ISectionWithVideo,
//   ISocialLink
// };




// #region - INTERFACES
// #endregion

// #region - EXPORTS
export type {};
// #endregion
