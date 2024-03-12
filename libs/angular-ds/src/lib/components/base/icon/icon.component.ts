// Packages & Modules
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Definitions
import type { TIconProps } from './icon.definitions';

// Component
@Component({
  selector: 'icon-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComp implements AfterViewInit {
  // #region - INPUTS
  @Input() public className: TIconProps['className'];
  @Input() public type: TIconProps['type'] = 'text';
  @Input() public value: TIconProps['value'] = '';
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  public baseClass: string = 'icon';
  // #endregion
  
  // #region - REFS
  @ViewChild('containerRef', { static: true })
  public containerRef!: ElementRef<HTMLSpanElement>;

  @ViewChild('imageRef', { static: true })
  public imageRef!: ElementRef<HTMLImageElement>;
  // #endregion
  
  // #region - METHODS
  /**
   * Generates a list of class names to be added to the component
   * 
   * @returns { string } - The css class names to render on the component.
   */
  public getClassNames(): string {
    return `
      ${ this.baseClass }
      ${ this.className ? this.className : '' }
    `;
  }
  /**
   * Converts inline images to inline SVG code.
   * 
   * @returns { Promise<void> } - Returns nothing.
   */
  private async imageToSVGConversion(): Promise<void> {
    // If the image is not found, terminate the function.
    if (!this.imageRef?.nativeElement) return;
  
    // Get the image component from the image ref
    const img: HTMLImageElement = this.imageRef.nativeElement;
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
      if (this.containerRef?.nativeElement) {
        this.containerRef.nativeElement.innerHTML = '';
        this.containerRef.nativeElement.appendChild(svg.documentElement);
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
  // #endregion

  // #region - LIFECYCLE METHODS
  public ngAfterViewInit(): void {
    if (this.type === 'svg') this.imageToSVGConversion();
  }
  // #endregion
}
