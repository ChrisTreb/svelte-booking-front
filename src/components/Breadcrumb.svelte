<script>
	import { onMount } from 'svelte';
	import { getUrlParts } from '../const/url';
	import { Link } from '../classes/Link';

	/** @type {Link[]} */
	let arrLinks = [];

	onMount(() => (arrLinks = getUrlParts()));
</script>

<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
        {#each arrLinks as link}
            <li class="breadcrumb-item"><a href="{link.target}"><b>{link.name}</b></a></li>
        {/each}
    </ol>
</nav>

<style>
	nav {
		width: 100%;
		margin-bottom: 20px;
		height: 30px;
	}

	a {
		color: black;
		text-decoration: none;
		transition: 0.2s;
	}

	a:hover {
		color: #665ed6;
	}
</style>
