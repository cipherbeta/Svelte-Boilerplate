import Home from "./pages/Home.svelte";
import Test from "./pages/Test.svelte";

const routes = {
	"/": Home,
	"/test/:id": Test
};

export default routes;
