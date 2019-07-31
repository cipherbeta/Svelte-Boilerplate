<script>
  export let params = {};
  console.log(params);
</script>

<section class="hero is-white is-medium">
  <div class="hero-body">
    <div class="container has-text-centered">
      <img
        src="/static/images/svelte.png"
        alt="Svelte Logo"
        style="width: 100px" />
      <h1 class="title">You're at test page {params.id}</h1>
      <h2 class="subtitle">What a trip.</h2>
    </div>
  </div>
</section>
