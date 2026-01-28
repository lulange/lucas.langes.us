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
  
  let show = $state(false);
 
</script>

<!-- Navigation-->
<nav class="navbar navbar-expand-lg text-uppercase fixed-top" class:navbar-shrink={isNavShrunk} id="main-nav">
  <div class="container">
    <a class="navbar-brand" href="/"><span class="shadowed">L</span></a>
    <button class="navbar-toggler text-uppercase font-weight-bold" type="button" onclick={() => {show = !show;}}>
      <img src="/images/list.svg" alt="bars">
    </button>
    <div class="collapse navbar-collapse" class:show={show} id="navbarResponsive">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/about">My Story</a></li>
        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/projects">Projects</a>
        </li>
        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/insights">Insights</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  button {
    border-radius: 0px;
    color: #e0def4;
  }
  
  button:focus {
    box-shadow: none;
  }
  
  #main-nav{
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-weight: 700;
    background-color: #191724;
    font-family: "Nixie One", system-ui;
    border-bottom: #1f1d2e;
    border-bottom-style: none;
  }
  
  .shadowed {
    text-shadow: .15em 0px #6e6a86;
  }
  
  #main-nav .navbar-brand {
      color: #f6c177;
      font-size: 2em;
      padding: 0px;
  }
  
  #main-nav .navbar-nav {
      margin-top: .5rem;
  }
  
  #main-nav .navbar-nav li.nav-item a.nav-link {
      color: #e0def4;
  }
  
  #main-nav .navbar-nav li.nav-item a.nav-link:hover {
      color: #c4a747;
  }
  
  #main-nav .navbar-toggler {
      font-size: 80%;
      padding: 0.8rem;
      background-color: #26233a;
  }
  
  @media (min-width: 992px) {
      #main-nav {
        padding-top: .5rem;
          padding-bottom: .5rem;
          transition: padding-top 0.3s, padding-bottom 0.3s;
      }
      
      .nav-link {
        font-size: 1.5em;
      }
  
      #main-nav .navbar-brand {
          font-size: 4em;
          transition: font-size 0.3s;
      }
  
      #main-nav .navbar-nav {
          margin-top: 0px;
      }
  
      #main-nav.navbar-shrink {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
      }
  
      #main-nav.navbar-shrink .navbar-brand {
          font-size: 3em;
      }
  }
</style>