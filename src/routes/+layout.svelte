<script>
  import Nav from '$lib/components/nav.svelte';
  import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
	
	
</script>

<svelte:head>
	<link rel="icon" href='/images/favicon.ico' />
  <title>Lucas Lange</title>

  <!-- Nixie One font and IBM Plex Mono font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nixie+One&display=swap" rel="stylesheet">

  <!-- Latest bootstrap compiled and minified CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>

<Nav />

{@render children()}

<Footer />


<style>
@media (max-width: 992px) {
  :global(.background-box) {
    display: none;
  }
}

:global(.background-box) {
  opacity: 0;

  animation-name: fadeInScroll;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-timeline: view();
  animation-range-end: 100%;
  will-change: opacity, transform;
}

:global(#boxes-start-right) {
  animation-name: fadeInOnce;
  animation-duration: 1s;
  animation-delay: .5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes fadeInOnce {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes fadeInScroll {
  0% {
    opacity: 0;
    transform: translateY(75px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-75px);
  }
}

/* Unvisited link */
:global(a:link) {
  color: #ebbcba;
}

/* Visited link */
:global(a:visited) {
  color: #ebbcba;
}

/* Mouse over link */
:global(a:hover) {
  color: #eb6f92;
}

/* Selected link */
:global(a:active) {
  color: #eb6f92;
}

:global(.width-restrict) {
  width: 100% !important;
}

@media (min-width: 992px) {
  :global(.width-restrict) {
    width: 75% !important;
  }
}

:global(body) {
  background-color: #191724 !important;
}
</style>