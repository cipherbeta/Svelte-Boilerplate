<script>
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<Navbar />
<Router {routes} />

<Footer />
