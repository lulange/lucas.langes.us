<script>
  const {heading} = $props();
</script>

<h1 class="page-section-heading text-center text-uppercase pb-5 mb-0">
  <div class="boxed">{heading}</div>
</h1>

<style>
  h1 {
    background-color: #1f1d2e;
    padding-top: calc(4rem + 74px);
    padding-bottom: 2rem;
    font-family: "Nixie One", system-ui;
    font-size: 2.75rem;
    line-height: 2.75rem;
    text-shadow: .05em .05em #6e6a86;
    color: #e0def4;
  }
  
  @media (min-width: 992px) {
    h1 {
      padding-top: calc(4rem + 104px);
      padding-bottom: 2rem;
    }
  }
  
  .boxed {
    box-shadow: -4px 4px #1f1d2e, -8px 8px #f6c177, 4px -4px #1f1d2e, 8px -8px #f6c177;
    padding: 0px;
    display:inline;
  }
  
</style>