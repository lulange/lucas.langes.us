<script>
  import TextSection from "$lib/components/textSection.svelte";
  import Banner from "$lib/components/banner.svelte";
  import { onMount } from "svelte";
  import { addSquares } from '$lib/js/squares.js';
  
  onMount(() => {
    const boxStartRight = document.getElementById("boxes-start-right");
    const boxStartLeft = document.getElementById("boxes-start-left");
    const boxEnd = document.getElementById("boxes-end");
    
    setTimeout(function() {addSquares(boxStartLeft, boxStartRight, boxEnd);}, 500); 
  });
  
  const notFound = [
    `Unfortunately, the page you are looking for does not exist.`
  ];
</script>

<div id="boxes-start-right"></div>
<div id="boxes-start-left"></div>

<Banner heading="Page Not Found" />

<TextSection
  content={notFound}
/>

<div id="boxes-end"></div>