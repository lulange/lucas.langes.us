<script>
  const {content} = $props();
</script>

<!-- Section-->
<section class="page-section mb-0">
  <div class="container-lg">
    <!-- Section Content-->
    <div class="container-lg width-restrict">
    <div class="p-2 overlay justify-content-center">
      {#each content as paragraph}
        <p class="lead">{@html paragraph}</p>
		  {/each}
    </div>
    </div>
    </div>
</section>

<style>
  section {
    background-color: #1f1d2e;
    color: #e0def4;
  }
  
  .page-section {
    padding: 0 0 2rem 0;
  }
  
  .overlay {
    background-color: #26233a;
  }
  
  .width-restrict {
    background-color: #26233a;
  }
</style>