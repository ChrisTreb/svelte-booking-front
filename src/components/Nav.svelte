<!-- Nav -->
<nav class="navbar navbar-expand-md fixed-top">
	<a class="navbar-brand" href="/">Book&nbsp;App</a>
	<button
		class="navbar-toggler"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#collapsibleNavbar"
	>
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="collapsibleNavbar">
		<a class="nav-link" href="/places"><i class="fa-solid fa-hotel"></i>&nbsp;Places</a>
		<div class="nav-item dropdown">
			<a
				class="nav-link dropdown-toggle"
				href="/"
				role="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
			<i class="fa-solid fa-pen-to-square"></i>&nbsp;Dashboard
			</a>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="/admin/dashboard/place-editor">Place edit</a></li>
				<li><a class="dropdown-item" href="/admin/dashboard/room-editor">Room edit</a></li>
				<li><a class="dropdown-item" href="/admin/dashboard/users">Users</a></li>
			</ul>
		</div>
		<a class="nav-link" href="/sign-up"><i class="fa-solid fa-pencil"></i> Sign&nbsp;up</a>
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
				<form>
					<div class="mb-3">
						<input type="text" class="form-control" id="login" placeholder="Login">
					</div>
					<div class="mb-3">
						<input type="password" class="form-control" id="password" placeholder="Password">
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	</div>
</nav>

<style>
	.navbar-brand {
		margin-left: 90px;
		font-weight: bolder;
	}

	.navbar-toggler {
		margin-top: 5px !important;
		background-color: #F8F9FA;
	}

	.navbar-brand, .nav-link {
		margin-top: 5px !important;
		text-align: center;
		background-color: #F8F9FA;
		padding: 5px;
		border-radius: 25px;
		width: 130px;
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

	form {
		min-width: 200px;
		margin: 10px;
	}
</style>
