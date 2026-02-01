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
    
    const cardDataList = 
    [
      {
        heading: "Waffle Wars",
        description: "An online board game",
        link: "/projects/waffleWars",
        linkTitle: "Waffle Wars Link",
        imgSrc: "/images/waffleWarsScreenshot.png",
        imgAlt: "A Waffle with the Waffle Wars logo superimposed"
      },
      {
        heading: "Mini DBMS",
        description: "Written in Rust",
        link: "/projects/miniDBMS",
        linkTitle: "Mini DBMS Link",
        imgSrc: "/images/miniDBMSScreenshot.png",
        imgAlt: "A console with DBMS commands"
      },
      {
        heading: "Maze Gen",
        description: "Print with CTRL-p",
        link: "/projects/mazeGen",
        linkTitle: "Maze Generation Link",
        imgSrc: "/images/MazeGenScreenshot.png",
        imgAlt: "A maze"
      },
      {
        heading: "Sudoku Solver",
        description: "Check your work",
        link: "/projects/sudokuSolver",
        linkTitle: "Sudoku Solver link",
        imgSrc: "/images/sudokuSolverScreenshot.png",
        imgAlt: "Sudoku Solver Running"
      }
    ];
</script>

<div id="boxes-start-left"></div>
<div id="boxes-start-right"></div>

<Banner heading="Projects"/>

<CardList 
  cardList={cardDataList}
/>

<div id="boxes-end"></div>