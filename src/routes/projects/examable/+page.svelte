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
      `Examable was my group's project for our computer-science capstone class at Eastern Michigan University.`,
      `It is a full-stack educational platform that uses Retrieval-Augmented Generation (RAG) to 
      transform study materials into context-aware assessments. We used React with TailwindCSS for the frontend
      and Python/Supabase for the backend. Unfortunately, it is no longer being hosted actively.`,
      `For more info on how the code works and a look at the code make sure to
      <a class="lead" target="_blank" href="https://github.com/lulange/examable">check out the Github page!</a>`,
    ];
  </script>
  
  <div id="boxes-start-right"></div>
  <div id="boxes-start-left"></div>
  
  <Banner heading="Examable"/>
  
  <FormattedImage 
    source="/images/ExamableScreenshot.png"
    altText="A dashboard welcoming the user and providing both usage statistics and options to navigate."
    explainerText="Examable's dashboard."
  />
  
  <TextSection
    content={pageContent}
  />
  
  <div id="boxes-end"></div>