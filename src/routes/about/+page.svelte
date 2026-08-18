<script>
    import Banner from "$lib/components/banner.svelte";
    import TextSection from "$lib/components/textSection.svelte";
    import { onMount } from "svelte";
    import { addSquares } from '$lib/js/squares.js';
    
    onMount(() => {
      const boxStartRight = document.getElementById("boxes-start-right");
      const boxStartLeft = document.getElementById("boxes-start-left");
      const boxEnd = document.getElementById("boxes-end");
      
      setTimeout(function() {addSquares(boxStartLeft, boxStartRight, boxEnd);}, 500);
        
    });
    
    const pageContent = [
      `Hello, I'm Lucas Lange. I'm a computer science and mathematics double major at Eastern Michigan University. 
      As a young teen, I got into coding through Khan Academy's courses for learning JavaScript and web development. I enjoyed creating my own
      games and animations through the interactive scripting portal on their site. After a while, I even
      branched out and created my own Github page to store some of those projects. That original site was the
      precursor to this site, although I have now redesigned it several times.`,
      
      `Also during this time, I became very interested in math. Throughout high school, I strove to take
      as many math classes as possible. This meant that when it came time to choose a major for college, I naturally came to the choice 
      to double major in math and computer science. Throughout my coursework, I have often been
      glad I chose to double major. As I see it, Mathematics provides a foundation in logical analysis through which I 
      am better able to approach programming.`,
      
      `During my summers off, I have interned as a business analyst at Advantage Comuputing Solutions (2025)
      and as a software developer at Tyler Technologies (2026).
      Currently, I am working through my final year at Eastern, expecting to graduate this December (2026).
      In January, I hope to begin working in the industry full time as a software developer.`
    ];
</script>

<div id="boxes-start-right"></div>
<div id="boxes-start-left"></div>

<Banner heading="My Story"/>

<TextSection
  content={pageContent}
/>

<div id="boxes-end"></div>