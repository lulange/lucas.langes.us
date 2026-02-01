<script>
  import Card from "$lib/components/card.svelte";
  const {cardList} = $props();
</script>


<div id="background" class="py-3">
<div class="container-lg width-restrict ps-3 pe-3">
<div class="row gx-5 justify-content-center">
  {#each cardList as card}
    <div class="col-xl-4 col-lg-6">
      <Card
        heading={card.heading}
        description={card.description}
        link={card.link}
        linkTitle={card.linkTitle}
        imgSrc={card.imgSrc}
        imgAlt={card.imgAlt}
      />
    </div>
  {/each}
</div>
</div>
</div>

<style>
  .row {
    background-color: #1f1d2e;
  }
  
  #background {
    background-color: #1f1d2e;
    margin: 0;
  }
</style>
