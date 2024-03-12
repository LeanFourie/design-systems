// Packages & Modules
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definitions
import type { TImageProps } from './image.definitions';

// Component
@Component({
  selector: 'agensea-design-systems-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  // #region - INPUTS
  @Input() public alt: TImageProps['alt'] = '';
  @Input() public className: TImageProps['className'];
  @Input() public fit: TImageProps['fit'] = 'contain';
  @Input() public src: TImageProps['src'] = '';
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  public baseClass: string = 'image';
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
      ${ this.baseClass }--fit-${ this.fit }
      ${ this.className ? this.className : '' }
    `;
  }
  // #endregion
}
