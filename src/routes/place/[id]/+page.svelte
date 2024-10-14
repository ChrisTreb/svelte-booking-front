<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container">
	<h1>{data.place.name}</h1>
	<img class="img-fluid img-place" src="{data.place.image}" alt="place" title="{data.place.name}">
	<p>{data.place.country}</p>
	<p>{data.place.city}</p>
	<p>{data.place.description}</p>
</div>


<style>
	.container {
		margin-top: 100px;
		min-height: 90vh;
	}

	.img-place {
		max-height: 500px;
	}
</style>