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
      `LimeLight was my group's project for the 2026 RocketHacks event at University of Toledo. It won the 'MLH - Best use of Solana' track.`,
      `Fundamentally, LimeLight is a startup discovery and investing platform prototype. It was intended to give users a discovery feed of startups, 
      founder/profile pages, and a studio workflow for creating startup pitch cards. It used React and TailwindCSS for the frontend and
      several AWS cloud services for the backend - including AWS Amplify Auth, AWS S3, and AWS Lambda functions.`,
      `This project is not actively hosted anywhere since it was a hackathon project which never left the prototype phase.
      However, feel free to check out all the technical details on 
      <a class="lead" target="_blank" href="https://github.com/lulange/LimeLight">the Github page</a>
      or read more on <a class="lead" target="blank" href="https://devpost.com/software/limelight-qj7bxn">the devpost submission article.</a>`,
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