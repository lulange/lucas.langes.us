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
      `Waffle Wars is a mix of tic-tac-toe, checkers, 
      and connect-4, all on a board inspired by a Belgian 4-quadrant waffle. The game was invented
      by my brother, Joel. Soon after the project to bring Waffle Wars from a physical game to an online began.
      Note that this is a collaborative project I am contributing to as opposed to a personal project.`,
      `Although, the project is still in its early phases.
      you can check out the website at <a class="lead" target="_blank" href="https://wafflewars.com">wafflewars.com</a>.
      We hope to have more features and gameplay options completed soon. You can
      check on updates on the Waffle Wars website, under the "updates" link.`,
    ];
  </script>
  
  <div id="boxes-start-right"></div>
  <div id="boxes-start-left"></div>
  
  <Banner heading="Waffle Wars"/>
  
  
  <FormattedImage 
    source="/images/waffleWarsScreenshot.png"
    altText="The Waffle Wars logo"
    explainerText="The Waffle Wars logo from the official page"
  />
  
  <TextSection
    content={pageContent}
  />
  
  <div id="boxes-end"></div>