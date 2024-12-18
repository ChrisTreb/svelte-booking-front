<script lang="ts">

	let btn: HTMLElement ;

	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			btn.style.display = 'block';
		} else {
			btn.style.display = 'none';
		}
	}

	function backToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
</script>

<button
	type="button"
	class="btn btn-floating btn-lg"
	id="btn-back-to-top"
    bind:this={btn}
	on:click={backToTop}
>
	<i class="fas fa-arrow-up"></i>
</button>

<style>
	#btn-back-to-top {
        z-index: 150;
		position: fixed;
		bottom: 20px;
		right: 20px;
		display: none;
        border-radius: 25px;
        background-color: rgb(240, 223, 198);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border: 1px solid black;
	}
</style>
