<script>
    import Banner from "$lib/components/banner.svelte";
    import CardList from "$lib/components/cardList.svelte";
    
    import { onMount } from "svelte";
    import { addSquares } from '$lib/js/squares.js';
    
    onMount(() => {
      const boxStartRight = document.getElementById("boxes-start-right");
      const boxStartLeft = document.getElementById("boxes-start-left");
      const boxEnd = document.getElementById("boxes-end");
      
      setTimeout(function() {addSquares(boxStartLeft, boxStartRight, boxEnd);}, 500);
    });
</script>

<div id="boxes-start-left"></div>
<div id="boxes-start-right"></div>

<Banner heading="Project Insights"/>

<CardList />

<div id="boxes-end"></div>