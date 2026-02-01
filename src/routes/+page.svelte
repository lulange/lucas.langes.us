<script>
  import TextSection from "$lib/components/textSection.svelte";
  import Masthead from "$lib/components/masthead.svelte";
  import { onMount } from "svelte";
  import { addSquares } from '$lib/js/squares.js';
  import SectionHeading from "$lib/components/sectionHeading.svelte";
  
  onMount(() => {
    const boxStartRight = document.getElementById("boxes-start-right");
    const boxStartLeft = document.getElementById("boxes-start-left");
    const boxEnd = document.getElementById("boxes-end");
    
    setTimeout(function() {addSquares(boxStartLeft, boxStartRight, boxEnd);}, 500); 
  });
  
  
  const contactMe = [
    `If you have suggestions for a project or would like to contact me for
    another reason, feel free to email me at lucas@langes.us. 
    I'm always open to comments, questions, and suggestions.
    Alternately, you can find me on linkedin, github, and discord using
    the links below.`,
  ];
  
  const aboutMe = [
    `Hi, I'm Lucas.
    I am a computer science and mathematics student at Eastern Michigan Universtiy and a general programming enthusiast.
    I like to make things related to math, gaming, algorithms, and more.`,
    `On this page, you'll find links to my projects and project insights where I go into depth
    on various aspects of my projects' implementations.`
  ];
</script>

<div id="boxes-start-right"></div>

<Masthead />

<div id="boxes-start-left"></div>

<SectionHeading heading="About Me" />

<TextSection
  content={aboutMe}
/>

<SectionHeading heading = "Contact Me" />

<TextSection
  content={contactMe}
/>

<div id="boxes-end"></div>


<style>
  
</style>
