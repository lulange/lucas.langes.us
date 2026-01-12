
<script>
  
  import { onMount } from 'svelte';
  
  let isNavShrunk = false;

  onMount(() => {
    
    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#main-nav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            isNavShrunk = false;
        } else {
            isNavShrunk = true;
        }
    };
  
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
  });
 
</script>

<!-- Navigation-->
<nav class="navbar navbar-expand-lg text-uppercase fixed-top" class:navbar-shrink={isNavShrunk} id="main-nav">
  <div class="container">
    <a class="navbar-brand" href="#page-top">Lucas Lange</a>
    <button class="navbar-toggler text-uppercase font-weight-bold text-white rounded" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
      aria-expanded="false" aria-label="Toggle navigation">
      <img src="/images/list.svg" alt="bars">
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#projects">Projects</a>
        </li>
        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Masthead-->
<header class="masthead text-black text-center" id="page-top">
  <div class="container d-flex align-items-center flex-column">
    <!-- Masthead Avatar Image-->
    <img class="masthead-avatar mb-5" src="./images/LLlogo.svg" alt="Lucas Lange double 'L' logo" />
    <!-- Masthead Heading-->
    <h1 class="masthead-heading text-uppercase mb-0">Lucas Lange</h1>
    <hr>
    <!-- Masthead Subheading-->
    <p class="masthead-subheading font-weight-light mb-0">Computer Science student at EMU</p>
  </div>
</header>

<!-- About Section-->
<section class="page-section bg-dark text-white mb-0" id="about">
  <div class="container">
    <!-- About Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
    <hr>
    <!-- About Section Content-->
    <div class="row">
      <div class="col-lg-4 ms-auto">
        <p class="lead">
          As you might have guessed, my name is Lucas Lange.
          I am a computer science student at Eastern Michigan Universtiy and a general programming enthusiast.
          I love making things that challenge my creativity and force me to learn new things.
        </p>
      </div>
      <div class="col-lg-4 me-auto">
        <p class="lead">
          On this page, you'll find a list of projects I've made (or am making).
          Some are little games I made years ago, and some are more recent additions.
          Feel free to check them out below if you'd like.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Projects Section-->
<section class="page-section" id="projects">
  <div class="container-lg px-4 mb-5">
    <div class="text-center mb-5">
      <h2 class="page-section-heading text-center text-uppercase text-black">Projects</h2>
    </div>
    <div class="row gx-5 justify-content-center">
      <div class="col-lg-6 mb-5">
        <!-- Project Card -->
        <div class="card overflow-hidden shadow rounded-4 border-0">
          <div class="card-body p-0">
            <div class="align-items-center">
              <img class="img-fluid" src="./images/miniDBMSScreenshot.png"
                alt="Commands being run on the Mini database management system." />
              <div class="p-5">
                <h2 class="fw-bolder">Mini DBMS</h2>
                <p>
                  The Mini Database Management System is a small command line interface database I wrote for a 
                  class project. Feel free to clone it from Github and try it out. It is my first project ever 
                  written in Rust.
                </p>
                <a href="./projects/miniDBMS/" class="stretched-link" title="Mini DBMS"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 
      <div class="col-lg-6 mb-5">
        
        <div class="card overflow-hidden shadow rounded-4 border-0">
          <div class="card-body p-0">
            <div class="align-items-center">
              <img class="img-fluid" src="/images/MazeGenScreenshot.png" alt="a maze" />
              <div class="p-5">
                <h2 class="fw-bolder">Maze Generation</h2>
                <p>
                  Maze Generation is fun to watch and fun to code. I enjoyed making this little project
                  that generates mazes with adjustable randomness. It can generate slowly or quickly per
                  your viewing pleasure. And, it has a built-in style for printing. Just hit CTRL-p and
                  enjoy.
                </p>
                <a href="./projects/randomMazeGeneration/index.html" class="stretched-link" title="Maze Gen"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-5">
        
        <div class="card overflow-hidden shadow rounded-4 border-0">
          <div class="card-body p-0">
            <div class="align-items-center">
              <img class="img-fluid" src="/images/orbitingSimulatorScreenshot.png"
                alt="Some drawn circles 'orbiting' a fixed center point." />
              <div class="p-5">
                <h2 class="fw-bolder">Orbit Sim</h2>
                <p>
                  This simple 2D orbit simulator spawns 100 planets to start.
                  Given options to control the planets' inital values for velocity,
                  distance, and size, there are lots of fun patterns to explore.
                </p>
                <a href="./projects/orbitSim/index.html" class="stretched-link" title="Orbit Sim"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-5">
        
        <div class="card overflow-hidden shadow rounded-4 border-0">
          <div class="card-body p-0">
            <div class="align-items-center">
              <img class="img-fluid" src="/images/dodgeTheVsScreenshot.png"
                alt="a simple ASCII style game" />
              <div class="p-5">
                <h2 class="fw-bolder">Dodge The V's</h2>
                <p>
                  This project started with the question of whether or not it is possible to
                  create a game using only text in an HTML element. One could say that this is my proof-of-concept.
                  To play this little game, just dodge the falling V's and collect the coins.
                </p>
                <a href="./projects/dodgeTheVs/index.html" class="stretched-link" title="dodge V's"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-5">
        
        <div class="card overflow-hidden shadow rounded-4 border-0">
          <div class="card-body p-0">
            <div class="align-items-center">
              <img class="img-fluid" src="/images/sudokuSolverScreenshot.png"
                alt="a half-solved sudoku puzzle" />
              <div class="p-5">
                <h2 class="fw-bolder">Sudoku Solver</h2>
                <p>
                  The sudoku solver does exactly what you'd expect. It solves sudoku puzzles - whether you put
                  in complete clues or not. At the time I made this, I was quite proud of the algorithm
                  since I came up with it on my own. Now, I mostly use it to check my work on puzzles.
                </p>
                <a href="./projects/sudokuSolver/index.html" class="stretched-link" title="Sudoku Solver"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-5">
        
        <div class="card overflow-hidden shadow rounded-4 border-0">
          <div class="card-body p-0">
            <div class="align-items-center">
              <img class="img-fluid" src="/images/2DMinigolfScreenshot.png" alt="2D minigolf" />
              <div class="p-5">
                <h2 class="fw-bolder">2D Minigolf</h2>
                <p>
                  2D Minigolf was my second game using the Phaser.js library (use Chrome or MS Edge to play).
                  I'll be the first to admit it isn't all that pretty, but I had a lot of fun making it.
                  It's a simple, but challenging game, and it lets you design your own levels too.
                </p>
                <a href="./projects/miniGolf/index.html" class="stretched-link" title="Minigolf Game"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-5">
        
        <div class="card overflow-hidden shadow rounded-4 border-0">
          <div class="card-body p-0">
            <div class="align-items-center">
              <img class="img-fluid" src="/images/aSimplePlatformerScreenshot.png"
                alt="A simple platformer" />
              <div class="p-5">
                <h2 class="fw-bolder">A Simple Platformer</h2>
                <p>
                  This was my first game using the Phaser.js library (use Chrome or MS edge to play).
                  I focused far more on programming the game than designing the art, but I've been told
                  it can still be enjoyable. You'll also notice I redid select parts of the art
                  while I was working on my pixel art skills.
                </p>
                <a href="./projects/aSimplePlatformer/index.html" class="stretched-link" title="Simple Platformer"></a>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div> 
  </div>
</section>

<!-- Contact Section-->
<section class="page-section" id="contact">
  <div class="container">
    <!-- Contact Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
    <hr>

    <div class="row justify-content-center">
      <div class="col-lg-6">
        <p class="lead">If you have suggestions for a project or would like to contact me for another reason,
          feel free to email me at <a href="mailto:lucas@langes.us">lucas@langes.us</a>. I'm always open to
          comments, questions, and suggestions.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Footer-->
<footer class="footer text-center">
  <div class="container">
    <div class="row">
      <!-- Footer Location-->
      <div class="col-lg-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">Location</h4>
        <p class="lead mb-0">
          I'm currently based<br> in Ypsilanti, MI
        </p>
      </div>
      <!-- Footer Social Icons-->
      <div class="col-lg-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">Around the Web</h4>
        <!-- linked in, github, and ... -->
        <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/lulange" title="github link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github"
            viewBox="0 0 16 16">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </a>
        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/lucas-lange-6553812b7/" title="linkedin link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin"
            viewBox="0 0 16 16">
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
        <a class="btn btn-outline-light btn-social mx-1" href="https://discord.gg/4xnvtBAraP" title="discord link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord"
            viewBox="0 0 16 16">
            <path
              d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
          </svg></a>
      </div>
      <!-- Footer About Text-->
      <div class="col-lg-4">
        <h4 class="text-uppercase mb-4">This website</h4>
        <p class="lead mb-0">
          This website is a <a class="text-white" href="https://pages.github.com/">github page</a>, <br>connected to
          my github profile.
        </p>
      </div>
    </div>
  </div>
</footer>

<!-- Copyright Section-->
<div class="copyright py-2 text-center text-white">
  <div class="container"><small>Copyright &copy; Lucas Lange 2024</small></div>
</div>


<style>
  #main-nav {
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-family: "sans-serif";
      font-weight: 700;
      background-color: #420914;
      font-family: "Pixelify Sans";
  }
  
  #main-nav .navbar-brand {
      color: #fff;
  }
  
  #main-nav .navbar-nav {
      margin-top: 1rem;
  }
  
  #main-nav .navbar-nav li.nav-item a.nav-link {
      color: #fff;
  }
  
  #main-nav .navbar-nav li.nav-item a.nav-link:hover {
      color: #c4a747;
  }
  
  #main-nav .navbar-toggler {
      font-size: 80%;
      padding: 0.8rem;
      background-color: black;
  }
  
  @media (min-width: 992px) {
      #main-nav {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
          transition: padding-top 0.3s, padding-bottom 0.3s;
      }
  
      #main-nav .navbar-brand {
          font-size: 1.75em;
          transition: font-size 0.3s;
      }
  
      #main-nav .navbar-nav {
          margin-top: 0;
      }
  
      #main-nav.navbar-shrink {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
      }
  
      #main-nav.navbar-shrink .navbar-brand {
          font-size: 1.5em;
      }
  }
  
  .masthead {
      background-color: #dfdfdf;
      padding-top: calc(6rem + 74px);
      padding-bottom: 10rem;
  }
  
  .masthead hr {
      opacity: 1;
      height: 1px;
      border-width: 3px;
      width: 80%;
      margin-top: 10px;
      margin-bottom: 10px;
  }
  
  .masthead .masthead-heading {
      font-size: 2.75rem;
      line-height: 2.75rem;
      font-family: "Pixelify Sans";
  }
  
  .masthead .masthead-subheading {
      font-size: 1.25rem;
  }
  
  .masthead .masthead-avatar {
      width: 15rem;
  }
  
  @media (min-width: 992px) {
      .masthead {
          padding-top: calc(6rem + 104px);
          padding-bottom: 10rem;
      }
  
      .masthead .masthead-heading {
          font-size: 4rem;
          line-height: 3.5rem;
      }
  
      .masthead .masthead-subheading {
          font-size: 1.5rem;
      }
  }
  
  #projects img {
      width: 100%;
      border-bottom-width: 2px;
      border-bottom-style: solid;
  }
  
  #projects h2,
  footer h4 {
      font-family: "Pixelify Sans";
  }
  
  .page-section {
      padding: 6rem 0;
  }
  
  .page-section .page-section-heading {
      font-size: 2.25rem;
      line-height: 2rem;
      font-family: "Pixelify Sans";
  }
  
  
  @media (min-width: 992px) {
      .page-section .page-section-heading {
          font-size: 3rem;
          line-height: 2.5rem;
      }
  }
  
  .footer {
      padding-top: 5rem;
      padding-bottom: 5rem;
      background-color: #420914;
      color: white;
  }
  
  .copyright {
      background-color: #000;
  }
  
  #contact {
      background-color: #dfdfdf;
  }
  
  
  .card:hover {
      transform: scale(1.04);
  }
  
  .card {
      transition: .3s;
      height: 100%;
  }
  
  .btn-social {
      border-radius: 100%;
      display: inline-flex;
      width: 3.25rem;
      height: 3.25rem;
  }
  
  .btn-social svg {
      fill: white;
  }
  
  .btn-social:hover {
      svg {
          fill: black;
      }
  }
  
  .btn {
      border-width: 0.1rem;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: #420914;
  }
  
  .btn:hover {
      background-color: #fff;
      color: #000;
  }
  
  #about-project {
      background-color: #dfdfdf;
      margin-top: 2rem;
      padding-top: 8rem;
  }
  
  @media (min-width: 992px) {
      #about-project {
          margin-top: 2rem;
          padding-top: 12rem;
      }
  }
</style>
