<script>
	import Breadcrumb from "../../components/Breadcrumb.svelte";
import Nav from "../../components/Nav.svelte";
</script>

<Nav />
<div class="container">
	<Breadcrumb />

</div>

<style>
	.container {
		min-height: calc(100vh - 100px);
		margin-top: 80px;
	}
</style>