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
    
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let boxes = [];
    let stack = [];
    let mazeSolvingInterval;
    let randomAmount = 10;
    document.getElementById("percent-randomness-selector").value = 10;
    
    const setBackground = (r, g, b) => {
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    setBackground(0, 0, 0);
    
    // sets the maze generation variables
    const setMaze = (width) => {
      boxes = [];
      for (let i=0; i<width; i++) {
        boxes.push([]);
        for (let j=0; j<width; j++) {
          boxes[i].push(1);
        }
      }
      let xAndYStart = Math.floor(width/2);
      boxes[xAndYStart][xAndYStart] = 0;
      stack = [{x: xAndYStart, y: xAndYStart}];
    };
    
    // the algorithm that draws the maze
    const drawMaze = () => {
      let randomSelector = Math.random();
      let selectedVertexIndex;
      if (randomSelector > randomAmount/100) {
        selectedVertexIndex = stack.length - 1;
      } else {
        selectedVertexIndex = Math.floor(Math.random() * stack.length);
      }
      let selectedVertex = stack[selectedVertexIndex];
    
      let possibleExt = [];
      // left
      if (selectedVertex.x !== 0) {
        if (boxes[selectedVertex.y][selectedVertex.x - 1] === 1) {
          possibleExt.push({x: selectedVertex.x - 1, y: selectedVertex.y});
        }
      }
      // right
      if (selectedVertex.x !== boxes[0].length - 1) {
        if (boxes[selectedVertex.y][selectedVertex.x + 1] === 1) {
          possibleExt.push({x: selectedVertex.x + 1, y: selectedVertex.y});
        }
      }
      // down
      if (selectedVertex.y !== 0) {
        if (boxes[selectedVertex.y - 1][selectedVertex.x] === 1) {
          possibleExt.push({x: selectedVertex.x, y: selectedVertex.y - 1});
        }
      }
      // up
      if (selectedVertex.y !== boxes.length - 1) {
        if (boxes[selectedVertex.y + 1][selectedVertex.x] === 1) {
          possibleExt.push({x: selectedVertex.x, y: selectedVertex.y + 1});
        }
      }
    
      // check possible extensions
      if (possibleExt.length === 0) {
        stack.splice(selectedVertexIndex, 1);
      } else {
        let randomNum = Math.floor(Math.random() * possibleExt.length);
        boxes[possibleExt[randomNum].y][possibleExt[randomNum].x] = 0;
        stack.push(possibleExt[randomNum]);
        ctx.fillStyle = "white";
    
        // drawing part
        if (Math.abs(selectedVertex.x - possibleExt[randomNum].x) === 0) {
          if (selectedVertex.y > possibleExt[randomNum].y) {
            ctx.fillRect(selectedVertex.x * (600/boxes[0].length) + 2, possibleExt[randomNum].y * (600 / boxes.length) + 2, (canvas.width / boxes[0].length) - 2, (canvas.height / boxes.length) * 2 - 2);
          } else {
            ctx.fillRect(selectedVertex.x * (600/boxes[0].length) + 2, selectedVertex.y * (600 / boxes.length) + 2, (canvas.width / boxes[0].length) - 2, (canvas.height / boxes.length) * 2 - 2);
          }
        } else {
          if (selectedVertex.x > possibleExt[randomNum].x) {
            ctx.fillRect(possibleExt[randomNum].x * (600/boxes[0].length) + 2, selectedVertex.y * (600 / boxes.length) + 2, (canvas.width / boxes[0].length) * 2 - 2, (canvas.height / boxes.length) - 2);
          } else {
            ctx.fillRect(selectedVertex.x * (600/boxes[0].length) + 2, selectedVertex.y * (600 / boxes.length) + 2, (canvas.width / boxes[0].length) * 2 - 2, (canvas.height / boxes.length) - 2);
          }
        }
      }
    
      if (stack.length === 0) {
        window.clearInterval(mazeSolvingInterval);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 2, 2, (canvas.height / boxes.length) - 2);
        ctx.fillRect(canvas.width - 2, canvas.height - (canvas.height / boxes.length), 2, (canvas.height / boxes.length) - 2);
      }
    };
    
    // button event listener that starts generation
    document.getElementById("button").addEventListener("click", () => {
      let selector = document.getElementById("size-selector");
      setBackground(0, 0, 0);
      setMaze(selector.value);
      window.clearInterval(mazeSolvingInterval);
      let quickGenerate = document.getElementById("quick-generate").checked;
      if (quickGenerate) {
        while (stack.length > 0) {
          drawMaze();
        }
      } else {
        mazeSolvingInterval = window.setInterval(function () {
          drawMaze();
        }, 0);
      }
    });
    
    // button event listener that starts generation
    document.getElementById("percent-randomness-selector").addEventListener("input", function() {
      randomAmount = this.value;
      document.getElementById("percent-notifier").textContent = this.value + "%";
    });
  });
  
  const pageContent = [
    `Maze generation is an interesting topic. 
    There are tons of different algorithms, 
    and they all make slightly different styled mazes. 
    In the case of this maze generator, I use a random walking 
    technique that creates a minimum spanning tree by attaching one square of the maze at a time. 
    This yields a maze with no loops or cut off sections. The generation has two speeds. 
    It defaults to a slow speed (optimal for watching the algorithm) 
    but can be sped up to be instant
    with an option underneath the maze frame. 
    There is also a 'randomness' range selector which will allow you
    to adjust the chance that a new random walk is started on a given iteration (rather than continuing the current one).
    Mazes with 'randomness' too high or too low are generally fairly easy.
    If you're the type of person who 
    likes to do mazes by hand, try printing with CTRL-p.`,
  ];
</script>

<div id="boxes-start-right"></div>
<div id="boxes-start-left"></div>

<Banner heading="Maze Generation" />

<TextSection content={pageContent} />

<section>
<div class="container-lg align-items-center justify-content-center text-center py-5">
    <div id="alt-text" class="text-center lead">
      Screen width is too small for the maze generation canvas. <br>Try using a screen with a pixel width of 700 or greater.
    </div>

    <div id="canvas-wrapper">
      <canvas id="canvas" width="602" height="602"></canvas>
    </div>
    <br>
    <button type="button" name="button" id="button" class="mb-3">Generate</button>
    <br>
    <input type="checkbox" id="quick-generate" class="no-printer-display form-check-input lead" />
    <label for="quick-generate" class="no-printer-display form-check-label lead" id="quick-generate-label">Quick
      Generate</label>
    <br>
    <label for="percent-randomness-selector" class="form-check-label lead">Randomness</label>
    <span id="percent-notifier" class="lead">10%</span>
    <br>
    <input type="range" id="percent-randomness-selector" class="mb-3" />
    <br>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6">
        <label for="size-selector" class="form-check-label lead">Select Size: </label>
        <select id="size-selector" class="form-select">
          <option value="15">15 x 15</option>
          <option value="20">20 x 20</option>
          <option value="30">30 x 30</option>
          <option value="40">40 x 40</option>
          <option value="50">50 x 50</option>
          <option value="75">75 x 75</option>
          <option value="100">100 x 100</option>
        </select>
      </div>
    </div>
  </div>
  </section>

<div id="boxes-end"></div>

<style>
  #button {
    background-color: #26233a;
    color: #e0def4;
    border: none;
    padding: .25rem .5rem;
    box-shadow: -4px 4px #1f1d2e, -8px 8px #6e6a86, 4px -4px #1f1d2e, 8px -8px #6e6a86;
    position: relative;
    z-index: 2;
  }
  
  #button:hover {
    /* Apply the animation on hover */
    animation: highlight .8s forwards; 
    animation-timing-function: ease-out;
    transition: transform ease-in .3s;
  }
  
  @keyframes highlight {
    0% {
      box-shadow: -4px 4px #1f1d2e, -8px 8px #6e6a86, 4px -4px #1f1d2e, 8px -8px #6e6a86;
    }
    20% {
      box-shadow: 0px 0px;
    }
    100% {
      box-shadow: -4px 4px #1f1d2e, -8px 8px #ebbcba, 4px -4px #1f1d2e, 8px -8px #ebbcba;
    }
  }
  
  label, span {
    color: #e0def4;
  }

  input[type="range"] {
    width: 25%;
    background-color: transparent;    
  }
  
  input, select {
    background-color: #6e6a86;
    border: none;
    box-shadow: none;
    border-radius: 0px;
  }
  
  /* the following range styles generated from a tool at https://danielstern.ca/range.css/#/ (with modifications) */
  input[type=range] {
    width: 25%;
    margin: 1rem 0;
    background-color: transparent;
    -webkit-appearance: none
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    background: #6e6a86;
    border-radius: 0px;
    width: 25%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type=range]::-webkit-slider-thumb {
    margin-top: -14px;
    width: 16px;
    height: 36px;
    background: #ebbcba;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 0px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #6e6a86;
  }
  input[type=range]::-moz-range-track {
    background: #6e6a86;
    border: 0.2px solid #010101;
    border-radius: 0px;
    width: 25%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type=range]::-moz-range-thumb {
    width: 16px;
    height: 36px;
    background: #ebbcba;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 0px;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 14.8px 0;
    color: transparent;
    width: 25%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type=range]::-ms-fill-lower {
    background: #6e6a86;
    border: 0.2px solid #010101;
    border-radius: 0px;
  }
  input[type=range]::-ms-fill-upper {
    background: #6e6a86;
    border: 0.2px solid #010101;
    border-radius: 0px;
  }
  input[type=range]::-ms-thumb {
    width: 16px;
    height: 36px;
    background: #ebbcba;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 0px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #6e6a86;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #6e6a86;
  }
  @supports (-ms-ime-align:auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    input[type=range] {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }
  
  .form-check-input:checked {
    background-color: #ebbcba; /* Primary blue */
  }
  
  .form-check-input:focus, select:focus {
    border: none;
    box-shadow: none;
  }
  
  #alt-text {
    display: none;
  }
  
  #canvas {
    border-color:#fff;
    border-width: 3px;
    border-style: solid;
  }

  @media (max-width: 700px) {
    #alt-text {
      display: block;
    }

    #canvas-wrapper {
      display: none;
    }
  }
  
  .container-lg, section {
    background-color: #1f1d2e;
  }
  
  @media print {
    :gloabl(#canvas-wrapper) {
      display: block;
      text-align: center;
    }
  
    :global(#about-project,
    #main-nav,
    #change-log,
    footer,
    #alt-text,
    #button,
    label,
    h2,
    .copyright,
    #quick-generate,
    #quick-generate-label,
    br,
    #percent-notifier,
    section) {
      display: none;
    }
  }
</style>