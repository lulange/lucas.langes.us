<script>
  const {source, altText, explainerText} = $props();
</script>

<section>
<div class="container-lg">
  <div class="container-lg width-restrict text-center p-4">
<img
  src={source}
  alt={altText}
/>
<div class="container-lg text-start p-0">
<p class="lead pt-2 m-0" id="explainer-text">{explainerText}</p>
</div>
  </div>
</div>
</section>

<style>
  .container-lg, section {
    background-color: #1f1d2e;
  }
  
  img {
    box-shadow: -4px 4px #1f1d2e, -8px 8px #9ccfd8, 4px -4px #1f1d2e, 8px -8px #9ccfd8;
    margin: 0px;
    z-index: 2;
    background-color: #1f1d2e;
    width: 80%;
  }
  
  p {
    color: #e0def4;
    padding-left: 10%;
    padding-right: 10%;
  }
</style>