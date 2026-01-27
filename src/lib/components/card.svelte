<script>
  const {heading, description, link, linkTitle, imgSrc, imgAlt} = $props();
</script>

<!-- Project Card -->
<div class="container mb-5">
<div id="card">
  <img
    class="card-img-top"
    src={imgSrc}
    alt={imgAlt}
  />
  <div class="card-body pt-3 pb-3 ps-4">
    <h2 class="card-title">{heading}</h2>
    <p class="lead mb-0">
      {@html description}
    </p>
   <a class="stretched-link" href={link} title="project link"></a>
  </div>
</div>
</div>

<style>
  h2 {
    font-family: "Nixie One", system-ui;
  }

  #card {
    transition: box-shadow 0.3s, box-shadow 0.3s;
    height: 100%;
    border-radius: 0px;
    border-style: none;
    box-shadow: -4px 4px #1f1d2e, -8px 8px #6e6a86, 4px -4px #1f1d2e, 8px -8px #6e6a86;
    position: relative;
    z-index: 2;
    transform: scale(1);
    transition: transform ease-in .3s;
  }
  
  #card:hover {
    /* Apply the animation on hover */
    animation: highlight .8s forwards; 
    animation-timing-function: ease-out;
    transform: scale(1.03);
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
  
  .card-body {
    background-color: #26233a;
    color: #e0def4;
  }
  
  img {
    width: 100%;
    border-radius: 0px;
  }
</style>