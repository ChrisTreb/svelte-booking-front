<script>
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLElement | null}
	 */
	let mask;
	/**
	 * @type {HTMLElement | null}
	 */
	let menu;

	onMount(() => {
		mask = document.getElementById('mask');
		menu = document.getElementById('offcanvasScrolling');
	});

	function toggleMask() {
		if (menu != null && mask != null && menu.classList.contains('hide')) {
			mask.style.transform = 'translateX(200px)';
			mask.style.opacity = '0.7';
			menu.classList.replace('hide', 'show');
		} else if (menu != null && mask != null && menu.classList.contains('show')) {
			mask.style.transform = 'translateX(100vw)';
			mask.style.opacity = '0';
			menu.classList.replace('show', 'hide');
		}
	}
</script>

<nav id="nav">
	<button
		id="btn-menu"
		class="btn"
		type="button"
		data-bs-toggle="offcanvas"
		data-bs-target="#offcanvasScrolling"
		aria-controls="offcanvasScrolling"
		on:click={toggleMask}><i class="fa-solid fa-bars"></i></button
	>

	<!-- Sign up -->
	<a id="sign-up" class="nav-link" href="/sign-up"
		><i class="fa-solid fa-pencil"></i>&nbsp;Sign&nbsp;up</a
	>
</nav>

<div
	class="offcanvas offcanvas-start hide"
	data-bs-scroll="true"
	data-bs-backdrop="false"
	tabindex="-1"
	id="offcanvasScrolling"
	aria-labelledby="offcanvasScrollingLabel"
>
	<div class="offcanvas-header">
		<h5 class="offcanvas-title" id="offcanvasScrollingLabel">
			<b><a class="navbar-brand" href="/">Book&nbsp;App</a></b>
		</h5>
		<button
			id="btn-menu-close"
			on:click={toggleMask}
			type="button"
			class="btn-close"
			data-bs-dismiss="offcanvas"
			aria-label="Close"
		></button>
	</div>
	<div class="offcanvas-body">
		<a class="nav-link" href="/places"><i class="fa-solid fa-hotel"></i>&nbsp;Places</a>
		<a class="nav-link" href="/place-editor"><i class="fa-solid fa-pen-to-square"></i>&nbsp;Place editor</a>
		<a class="nav-link" href="/room-editor"><i class="fa-solid fa-pen-to-square"></i>&nbsp;Room editor</a>
		<a class="nav-link" href="/users"><i class="fa-solid fa-user"></i>&nbsp;Users</a>
		<div class="nav-item dropdown">
			<a
				class="nav-link dropdown-toggle"
				href="/"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				<i class="fa-solid fa-right-to-bracket"></i> Sign&nbsp;in
			</a>
			<div class="dropdown-menu">
				<form id="sign-in-form">
					<div class="mb-3">
						<input type="text" class="form-control" id="login" placeholder="Login" />
					</div>
					<div class="mb-3">
						<input type="password" class="form-control" id="password" placeholder="Password" />
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	</div>
</div>

<div id="mask"></div>

<style>
	#nav {
		z-index: 100;
		padding: 0 30px;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#btn-menu {
		z-index: 100;
		position: fixed;
		top: 20px;
		width: 50px;
		height: 50px;
		padding: 5px;
		background-color: white;
		border: 1px solid black;
		font-family: 30px;
		border-radius: 25px;
		transition: 0.5s;
	}

	#sign-up {
		z-index: 300;
		position: absolute;
		right: 15px;
		top: 20px;
		font-weight: bold;
		display: flex;
		align-items: center;
		height: 30px;
		background-color: white;
		border: 1px solid black;
		border-radius: 25px;
		padding: 20px;
		transition: 0.5s;
	}

	#btn-menu:hover, #sign-up:hover {
		transform: scale(0.95);
		background-color: #F0DFC6;
	}

	#offcanvasScrolling {
		width: 200px;
		z-index: 200;
		padding: 10px;
	}

	.offcanvas-body > .nav-link, .nav-item {
		padding: 10px;
		margin: 5px;
		border: 1px solid rgb(214, 214, 214);
		border-radius: 5px;
		transition: 0.5s;
	}

	#mask {
		z-index: 150;
		opacity: 0;
		background-color: black;
		position: fixed;
		top: 0;
		width: calc(100vw - 200px);
		height: 100vh;
		transform: translateX(100vw);
		transition: 0.2s;
	}

	#sign-in-form {
		padding: 15px;
	}

	/* Media queries */

	@media (max-width: 768px) {
		#btn-menu {
			left: 10px;
		}
	}
</style>
