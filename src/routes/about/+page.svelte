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
      as many math classes as possible. At the end of it all, I had completed four college-level math classes as a dual-enrolled 
      student. This meant that when it came time to choose a major for college, I was able to choose to double major in
      both math and computer science without adding extra semesters to my degree. Throughout my coursework, I have often been
      glad I chose to double major. As I see it, Mathematics provides a foundation in logical analysis through which I 
      am better able to approach programming.`,
      
      `Currently, I am working through my final year at Eastern, expecting to graduate in December this year (2026).
      I hope to work through the summer as a Software Engineer Intern in pursuit of a future career in the tech industry.`
    ];
</script>

<div id="boxes-start-right"></div>
<div id="boxes-start-left"></div>

<Banner heading="My Story"/>

<TextSection
  content={pageContent}
/>

<div id="boxes-end"></div>