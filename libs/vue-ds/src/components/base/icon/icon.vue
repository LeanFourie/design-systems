<!-- Script -->
<script
  lang="ts"
  setup
>
  // #region - Packages & Modules
  import {
    onMounted,
    ref
  } from 'vue';
  // #endregion

  // #region - Definitions
  import type { TIconProps } from './icon.definitions';
  // #endregion

  // #region - Props
  const props = defineProps<TIconProps>();
  // #endregion

  // #region - Refs
  const containerRef = ref<HTMLSpanElement | null>(null);
  const imageRef = ref<HTMLImageElement | null>(null);
  // #endregion

  // #region - Variables
  /**
   * Sets the base class name of the component.
   */
  const baseClass: string = 'icon';
  // #endregion

  // #region - Methods
  /**
   * Converts inline images to inline SVG code.
   * 
   * @returns { Promise<void> } - Returns nothing.
   */
   async function imageToSVGConversion(): Promise<void> {
    // If the image is not found, terminate the function.
    if (!imageRef.value) return;
  
    // Get the image component from the image ref
    const img: HTMLImageElement = imageRef.value;
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
      if (containerRef.value) {
        containerRef.value.innerHTML = '';
        containerRef.value.appendChild(svg.documentElement);
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

  // #region - Lifecycle Methods
  onMounted(() => {
    if (props.type === 'svg') imageToSVGConversion();
  });
  // #endregion
</script>
<!-- ./Script -->

<!-- Template & Styles -->
<template src="./icon.html" />
<style
  src="./icon.scss"
  scoped
></style>
<!-- ./Template & Styles -->
