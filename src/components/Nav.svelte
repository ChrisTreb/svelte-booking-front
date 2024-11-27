<!-- Nav -->
<nav class="navbar fixed-top bg-body-tertiary">
	<a class="navbar-brand" href="/">Book App</a>
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
</nav>

<style>
	.navbar {
		justify-content: left;
	}

	.navbar-brand {
		margin-left: 50px;
		font-weight: bolder;
	}

	.nav-link {
		margin: 0 20px;
	}
</style>
