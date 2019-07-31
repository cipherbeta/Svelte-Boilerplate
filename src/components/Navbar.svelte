<script>
  import { link } from "svelte-spa-router";
</script>

<div class="navbar is-light">
  <div class="navbar-brand">
    <a href="/" use:link class="navbar-item">Svelte Boilerplate</a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-end">
      <a href="/test/1" use:link class="navbar-item">Link 1</a>
      <a href="/test/2" use:link class="navbar-item">Link 2</a>
      <a href="/test/3" use:link class="navbar-item">Link 3</a>
    </div>
  </div>
</div>
