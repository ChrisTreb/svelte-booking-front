<script>
	import { ALT_PLACE_IMG } from '../../../const/url';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(JSON.stringify(data));
</script>

<div class="container">
	<h1>{data.place.name}</h1>
	<img class="img-fluid" src="{data.place.image}" alt="place" title="{data.place.name}">
	<p>{data.place.country}</p>
	<p>{data.place.city}</p>
	<p>{data.place.description}</p>
</div>


<style>
	.container {
		margin-top: 100px;
	}
</style>