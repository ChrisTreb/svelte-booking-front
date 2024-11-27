<!-- Nav -->
<nav class="navbar navbar-expand-sm fixed-top bg-body-tertiary">
	<a class="navbar-brand" href="/">Book App</a>
	<button
		class="navbar-toggler"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#collapsibleNavbar"
	>
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="collapsibleNavbar">
		<a class="nav-link active" aria-current="page" href="/">Home</a>
		<a class="nav-link" href="/places">Places</a>
		<div class="nav-item dropdown">
			<a
				class="nav-link dropdown-toggle"
				href="/"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Dashboard
			</a>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="/admin/dashboard/place-editor">Place edit</a></li>
				<li><a class="dropdown-item" href="/admin/dashboard/room-editor">Room edit</a></li>
				<li><a class="dropdown-item" href="/admin/dashboard/users">Users</a></li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.navbar-brand {
		margin-left: 90px;
		font-weight: bolder;
	}

	.navbar-toggler {
		position: absolute;
		top: 10px;
		left: 20px;
	}

	#collapsibleNavbar {
		margin: 10px 0;
	}

	.nav-link {
		margin: 0 20px;
	}
</style>
