// IMPORTS
// Definitions
import {
  TSizeExtended,
  // TSizeFriendlyNames
} from '../../';

// METHODS
/**
 * Transforms sentence case strings to snake-case strings.
 * 
 * @param { string } value - The initial sentence case string to transform.
 * 
 * @returns { string } - A transformed snake-case string.
 */
const toSnakeCase = ( value: string ): string => (
  value.toLowerCase().split( ' ' ).join( '-' )
);

/**
 * Transforms pixel values to rem values in JS.
 * 
 * @param { number } value - The pixel value to be transformed.
 * 
 * @returns { string } - A string rem value calculated from the pixel value.
 */
const toRem = ( value: number ): string => (
  `${ value / 16 }rem`
);

// /**
//  * Converts friendly names used for sizes to industry names.
//  * Friendly names are used by the relume lib, e.g. small, medium, large.
//  * Industry names are used by the component lib, e.g. sm, md, lg.
//  * 
//  * @param { TSizeFriendlyNames } size - The industry name for the size.
//  * 
//  * @returns { TSizeExtended } - The friendly name for the size.
//  */
// const sizeFriendlyNameToName = ( size: TSizeFriendlyNames ): TSizeExtended => {
//   // Create a variable to store the size industry name
//   let sizeValue: TSizeExtended;

//   // Use the size friendly name to find and set the size industry name
//   switch ( size ) {
//     case 'tiny':
//       sizeValue =  'xs';
//       break;
//     case 'small':
//       sizeValue = 'sm';
//       break;
//     case 'regular':
//       sizeValue = 'md';
//       break;
//     case 'medium':
//       sizeValue = 'md';
//       break;
//     case 'large':
//       sizeValue = 'lg';
//       break;
//     case 'extra-large':
//       sizeValue = 'xl';
//       break;
//     default:
//       break;
//   };

//   // Return the size industry name
//   return sizeValue!;
// }

// /**
//  * Converts industry names used for sizes to friendly names.
//  * Friendly names are used by the relume lib, e.g. small, medium, large.
//  * Industry names are used by the component lib, e.g. sm, md, lg.
//  * 
//  * @param { TSizeExtended } size - The friendly name for the size.
//  * 
//  * @returns { TSizeFriendlyNames } - The industry name for the size.
//  */
// const sizeNameToFriendlyName = ( size: TSizeExtended ): TSizeFriendlyNames => {
//   // Create a variable to store the size friendly name
//   let sizeValue: TSizeFriendlyNames;

//   // Use the size industry name to find and set the size friendly name
//   switch (size) {
//     case 'xs':
//       sizeValue =  'tiny';
//       break;
//     case 'sm':
//       sizeValue = 'small';
//       break;
//     case 'md':
//       sizeValue = 'regular';
//       break;
//     case 'lg':
//       sizeValue = 'large';
//       break;
//     case 'xl':
//       sizeValue = 'extra-large';
//       break;
//     default:
//       break;
//   };

//   // Return the size friendly name
//   return sizeValue!;
// }

/**
 * Formats date items accordion to the Relume standard, e.g. `02 Jan 2024`.
 * 
 * @param { Date } date - The date to be formatted.
 * 
 * @returns { string } - A string with the newly formatted date.
 */
const formatDate = ( date: Date ): string => (
  date.toLocaleDateString( undefined, {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
);

/**
 * Generates random numbers within a range.
 * 
 * @param { number } min - The minimum number in the range.
 * @param { number } max - The maximum number in the range.
 * 
 * @returns { number } - The randomised number.
 */
const getRandomNumberInRange = (
  min: number,
  max: number
): number => {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

// EXPORTS
export {
  formatDate,
  getRandomNumberInRange,
  // sizeFriendlyNameToName,
  // sizeNameToFriendlyName,
  toRem,
  toSnakeCase
}