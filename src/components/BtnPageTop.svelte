<script lang="ts">

	let btn: HTMLElement ;

	function backToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
</script>

{#if document.readyState == "complete" }
	<button
		type="button"
		class="btn btn-floating btn-lg"
		id="btn-back-to-top"
		bind:this={btn}
		on:click={backToTop}
	>
		<i class="fas fa-arrow-up"></i>
	</button>
{/if}

<style>
	#btn-back-to-top {
		display: none;
        z-index: 150;
		position: fixed;
		bottom: 20px;
		right: 20px;
        border-radius: 25px;
        background-color: rgb(240, 223, 198);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border: 1px solid black;
	}

	@media (max-width: 768px) {
		#btn-back-to-top {
			display: block;
		}
	}
</style>
