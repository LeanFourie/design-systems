// Packages & Modules
import styles from './image.module.scss';

// Definitions
import type { TImageProps } from './image.definitions';

// Component
export const Image = ( props: TImageProps ): JSX.Element => {
  // #region - PROPS
  const {
    alt,
    className,
    fit = 'contain',
    src
  } = props;
  // #endregion

  // #region - VARIABLES
  /**
   * Sets the base class name of the component
   */
  const baseClass: string = 'image';
  // #endregion

  // #region - HTML
  return (
    <div className={`
      ${ styles[ baseClass ] }
      ${ styles[ `${ baseClass }--fit-${ fit }` ] }
      ${ className ? className : '' }
    `}>
      <img
        alt={ alt }
        className={ styles[ `${ baseClass }__element` ] }
        loading={ 'lazy' }
        src={ src }
      />
    </div>
  );
  // #endregion
}
