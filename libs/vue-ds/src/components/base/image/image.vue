<!-- Script -->
<script
  lang="ts"
  setup
>
  // #region - Definitions
  import type { TImageProps } from './image.definitions';
  // #endregion

  // #region - Props
  const props = defineProps<TImageProps>();
  // #endregion

  // #region - Variables
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'image';
  // #endregion
</script>
<!-- ./Script -->

<!-- Template & Styles -->
<template src="./image.html" />
<style
  src="./image.scss"
  scoped
></style>
<!-- ./Template & Styles -->
