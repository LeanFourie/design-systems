// Packages & Modules
import { toSnakeCase } from '@agensea-design-systems/utils';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
  WritableSignal
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Definitions
import type { TTextProps } from './text.definitions';

// Component
@Component({
  selector: 'text-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComp implements OnInit, OnChanges {
  // #region - INPUTS
  @Input() public casing: TTextProps['casing'] = 'unset';
  @Input() public className: TTextProps['className'];
  @Input() public decoration: TTextProps['decoration'] = 'none';
  @Input() public renderAs: TTextProps['renderAs'];
  @Input() public style: TTextProps['style'] = 'unset';
  @Input() public variant: TTextProps['variant'] = 'body md';
  @Input() public weight: TTextProps['weight'];
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component.
   */
  public baseClass: string = 'text';
  // #endregion

  // #region - SIGNALS
  private _fontWeight: WritableSignal<TTextProps['weight']> = signal('regular');
  // #endregion
  
  // #region - METHODS
  /**
   * Sets the appropriate font weight based on the 'variant' prop.
   * 
   * @returns { void } - Returns nothing.
   */
  private setFontWeight(): void {
    switch (true) {
      case (
        !!this.weight &&
        typeof this.weight === 'string'
      ):
        this._fontWeight.set(this.weight);
        break;
      case this.variant === 'heading lg':
        this._fontWeight.set('extra bold');
        break;
      case (
        this.variant === 'heading md' ||
        this.variant === 'heading sm' ||
        this.variant === 'quote'
      ):
        this._fontWeight.set('bold');
        break;
      case (
        this.variant === 'sub-heading lg' ||
        this.variant === 'sub-heading md'
      ):
        this._fontWeight.set('semi bold');
        break;
      case this.variant === 'sub-heading sm':
        this._fontWeight.set('medium');
        break;
      default:
        this._fontWeight.set('regular');
        break;
    };
  }
  /**
   * Generates a list of class names to be added to the component
   * 
   * @returns { string } - The css class names to render on the component.
   */
  public getClassNames(): string {
    return (`
      ${ this.baseClass }
      ${ this.baseClass }--casing-${ toSnakeCase(this.casing || 'unset') }
      ${ this.baseClass }--decoration-${ toSnakeCase(this.decoration || 'none') }
      ${ this.baseClass }--style-${ toSnakeCase(this.style || '') }
      ${ this.baseClass }--variant-${ toSnakeCase(this.variant ||'body md') }
      ${ this.baseClass }--weight-${ toSnakeCase(this._fontWeight() || 'regular') }
      ${ this.className ? this.className : '' }
    `);
  }
  // #endregion

  // #region - LIFECYCLE METHODS
  public ngOnInit(): void {
    this.setFontWeight();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['weight'] || changes['variant']) {
      this.setFontWeight();
    }
  }
  // #endregion
}
