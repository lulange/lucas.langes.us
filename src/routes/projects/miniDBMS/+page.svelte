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
      `My mini database management system uses very SQL-like commands - the specification of my professor. And, while it doesn't 
      have near the level of query optimization a commerical database might implement, it does 
      work to separate a query's conditions to reduce redudant checks through selection cascading and 
      condition splitting. Selection cascading is the process of reducing the number of comparisions done 
      on any tuple by removing a tuple as early as possible from the condition checking process - e.g. given x and y, 
      if x is false, then y is irrelevant. And, condition splitting is the process of splitting up the given condition when
      possible logically so that, when selecting from multiple tables, each table can be filtered before creating a 
      cartesian product. This allows for index searches and other shortcuts to reduce work. If you're interested
      in looking at the code or trying it out yourself, feel free to have a look.`,
    `<a class="lead" target="_blank" href="https://github.com/lulange/mini_dbms">Check out the Github page!</a>`,
    ];
  </script>
  
  <div id="boxes-start-right"></div>
  <div id="boxes-start-left"></div>
  
  <Banner heading="Mini DBMS"/>
  
  <FormattedImage 
    source="/images/miniDBMSScreenshot.png"
    altText="A console with my mini DBMS running"
    explainerText="A console with my mini DBMS program running"
  />
  
  <TextSection
    content={pageContent}
  />
  
  <div id="boxes-end"></div>