<script>
  const {content} = $props();
</script>

<!-- Section-->
<section class="page-section mb-0">
  <div class="container-lg">
    <!-- Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase mb-5 animate-on-scroll"><div class="boxed">{content.heading}</div></h2>
    <!-- Section Content-->
    <div class="container-lg width-restrict">
    <div class="p-3 overlay justify-content-center">
      {#each content.content as paragraph}
        <p class="lead">{@html paragraph}</p>
		  {/each}
    </div>
    </div>
    </div>
</section>

<style>
  section {
    background-color: #191724;
    color: #e0def4;
  }
  
  .page-section {
    padding: 4rem 0;
  }

  .page-section .page-section-heading {
    font-size: 2.25rem;
    line-height: 4rem;
    font-family: "Nixie One";
    text-shadow: .05em .05em #6e6a86;
  }

  @media (min-width: 992px) {
    .page-section .page-section-heading {
      font-size: 3rem;
      line-height: 2.5rem;
    }
  }
  
  .boxed {
    box-shadow: -4px 4px #191724, -8px 8px #f6c177, 4px -4px #191724, 8px -8px #f6c177;
    padding: 0px;
    display:inline;
  }
  
  .overlay {
    background-color: #1f1d2e;
  }
  
  .animate-on-scroll {
    opacity: 0;
    animation-name: fadeIn;
    animation-timeline: view();
    animation-range-end: 60%;
    animation-fill-mode: both;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .width-restrict {
    background-color: #1f1d2e;
  }
</style>