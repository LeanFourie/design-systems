'use client'

// Packages & Modules
import styles from './icon.module.scss';
import {
  useEffect,
  useRef
} from 'react'

// Definitions
import type { TIconProps } from './icon.definitions';

// Component
export const Icon = (props: TIconProps): JSX.Element => {
  // PROPS
  const {
    className,
    type,
    value
  } = props;
  
  // VARIABLES
  /**
  * Sets the base class name of the component
  */
  const baseClass: string = 'icon';
  
  // REFS
  /**
  * Stores a reference to the img container
  */
  const containerRef = useRef<HTMLSpanElement>(null);
  /**
  * Stores a reference to the img element
  */
  const imageRef = useRef<HTMLImageElement>(null);
  
  // METHODS
  /**
   * Converts inline images to inline SVG code.
   * 
   * @returns { Promise<void> } - Returns nothing.
   */
  const imageToSVGConversion = async (): Promise<void> => {
    // If the image is not found, terminate the function.
    if (!imageRef.current) return;
  
    // Get the image component from the image ref
    const img: HTMLImageElement = imageRef.current;
    // Get the image URL from the image component
    const imgURL: string | null = img.getAttribute('src');
  
    // If the image url is not found, terminate the function.
    if (!imgURL) return;

    // Load the image in a try catch...
    // in order to safely handle errors during conversion
    try {
      // Fetch the image using the fetch API so that we can extract the response text
      const response = await fetch(imgURL);
      // Get the XML from the response to access the image properties
      const xml = await response.text();
  
      // Parse the image xml so that we can read the SVG code
      const dom = new DOMParser();
      const svg = dom.parseFromString(xml, 'image/svg+xml');

      // If the image container is found,
      // we clear the container to...
      // safely append the svg into the image container
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(svg.documentElement);
      }

      // Get the parent element of the image
      const parent = img.parentElement as HTMLElement;

      // If the image parent element is found,
      // Get the SVG inside the parent and...
      // remove the xmlns attribute as it sometimes breaks the SVG code
      if (parent) {
        const svgElement = parent.querySelector('svg');
        if (svgElement) svgElement.removeAttribute('xmlns:a');
      }
    }
    // Catch any errors
    catch (error) {
      // Log the error to the console to provide some more context.
      console.error('Error fetching or parsing SVG:', error);
    }
  }

  // EFFECTS
  useEffect(() => {
    // Check if `type` is of `'svg'` and run the inline image to svg conversion.
    if (type === 'svg') imageToSVGConversion();
  }, []);
  
  // HTML
  return (
    <span className={`
      ${ styles[baseClass] }
      ${ className ? className : '' }
    `}>
      {/* SVG Icon */}
      {(type === 'svg') && (
        <span
          ref={ containerRef }
          className={`
            ${ styles[ `${ baseClass }__element` ] }
          `}
        >
          <img
            ref={ imageRef }
            alt={ '' }
            src={ value }
          />
        </span>
      )}
      {/* ./SVG Icon */}

      {/* Text Icon */}
      {(type === 'text') && (
        <span className={`
          ${ styles[ `${ baseClass }__element` ] }
          ${ className ? className : '' }
          material-symbols-rounded
        `}>
          { value }
        </span>
      )}
      {/* ./Text Icon */}
    </span>
  );
}
