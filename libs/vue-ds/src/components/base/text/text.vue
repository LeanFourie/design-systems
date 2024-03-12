<!-- Script -->
<script
  lang="ts"
  setup
>
  // #region - Packages & Modules
  import { toSnakeCase } from '@agensea-design-systems/utils';
  import { computed } from 'vue';
  // #endregion

  // #region - Definitions
  import type {
    TTextProps,
    TTextTag
  } from './text.definitions';
  // #endregion

  // #region - Props
  const props = defineProps<TTextProps>();
  // #endregion

  // #region - Variables
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'text';
  // #endregion

  // #region - Computed Properties
  /**
   * Stores the HTML tag element to render.
   */
  const _tag = computed<TTextTag>(() => {
    switch (true) {
      case props.renderAs && props.renderAs === 'label':
        return 'label';
      case props.renderAs && props.renderAs === 'span':
        return 'span';
      case props.renderAs && props.renderAs === 'caption':
        return 'caption';
      case props.variant === 'quote':
        return 'blockquote';
      case props.variant === 'heading lg':
        return 'h1';
      case props.variant === 'heading md':
        return 'h2';
      case props.variant === 'heading sm':
        return 'h3';
      case props.variant === 'sub-heading lg':
        return 'h4';
      case props.variant === 'sub-heading md':
        return 'h5';
      case props.variant === 'sub-heading sm' || props.variant === 'tagline':
        return 'h6';
      default:
        return 'p';
    }
  });
  /**
   * Stores the font weight value to render.
   */
  const _fontWeight = computed<TTextProps['weight']>(() => {
    switch (true) {
      case (
        !!props.weight &&
        typeof props.weight === 'string'
      ):
        return props.weight;
      case props.variant === 'heading lg':
        return 'extra bold';
      case (
        props.variant === 'heading md' ||
        props.variant === 'heading sm' ||
        props.variant === 'quote'
      ):
        return 'bold';
      case (
        props.variant === 'sub-heading lg' ||
        props.variant === 'sub-heading md'
      ):
        return 'semi bold';
      case props.variant === 'sub-heading sm':
        return 'medium';
      default:
        return 'regular';
    }
  });
  // #endregion
</script>
<!-- ./Script -->

<!-- Template & Styles -->
<template src="./text.html" />
<style
  src="./text.scss"
  scoped
></style>
<!-- ./Template & Styles -->
