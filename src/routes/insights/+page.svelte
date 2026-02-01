<script>
    import Banner from "$lib/components/banner.svelte";
    import CardList from "$lib/components/cardList.svelte";
    
    import { onMount } from "svelte";
    import { addSquares } from '$lib/js/squares.js';
    import TextSection from "$lib/components/textSection.svelte";
    
    onMount(() => {
      const boxStartRight = document.getElementById("boxes-start-right");
      const boxStartLeft = document.getElementById("boxes-start-left");
      const boxEnd = document.getElementById("boxes-end");
      
      setTimeout(function() {addSquares(boxStartLeft, boxStartRight, boxEnd);}, 500);
    });
    
    const pageContent = [
      `The insights section is new. Check back later to see deep dives into projects I'm working on.`
    ];
</script>

<div id="boxes-start-left"></div>
<div id="boxes-start-right"></div>

<Banner heading="Insights"/>

<TextSection content={pageContent} />

<div id="boxes-end"></div>