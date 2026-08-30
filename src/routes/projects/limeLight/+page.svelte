<script>
    import Banner from "$lib/components/banner.svelte";
    import TextSection from "$lib/components/textSection.svelte";
    import { onMount } from "svelte";
    import { addSquares } from '$lib/js/squares.js';
    import FormattedImage from "$lib/components/formattedImage.svelte";
    
    onMount(() => {
      const boxStartRight = document.getElementById("boxes-start-right");
      const boxStartLeft = document.getElementById("boxes-start-left");
      const boxEnd = document.getElementById("boxes-end");
      
      setTimeout(function() {addSquares(boxStartLeft, boxStartRight, boxEnd);}, 500);
      
    });
    
    const pageContent = [
      `TODO.`,
      `<a class="lead" target="_blank" href="https://github.com/lulange/LimeLight">Check out the Github page!</a>`,
    ];
  </script>
  
  <div id="boxes-start-right"></div>
  <div id="boxes-start-left"></div>
  
  <Banner heading="LimeLight"/>
  
  <FormattedImage 
    source="/images/LimeLightScreenshot.png"
    altText="A dark webpage with a title saying 'the premier platform for startup investing'."
    explainerText="LimeLight's home page."
  />
  
  <TextSection
    content={pageContent}
  />
  
  <div id="boxes-end"></div>