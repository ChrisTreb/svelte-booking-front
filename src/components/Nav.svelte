<nav id="nav">
	<button
		id="btn-menu"
		class="btn"
		type="button"
		data-bs-toggle="offcanvas"
		data-bs-target="#offcanvasScrolling"
		aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars"></i></button
	>

	<!-- Sign up -->
	<a id="sign-up" class="nav-link" href="/sign-up"
		><i class="fa-solid fa-pencil"></i>&nbsp;Sign&nbsp;up</a
	>
</nav>

<div
	class="offcanvas offcanvas-start"
	data-bs-scroll="true"
	data-bs-backdrop="false"
	tabindex="-1"
	id="offcanvasScrolling"
	aria-labelledby="offcanvasScrollingLabel"
>
	<div class="offcanvas-header">
		<h5 class="offcanvas-title" id="offcanvasScrollingLabel">
			<a class="navbar-brand" href="/">Book&nbsp;App</a>
		</h5>
		<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
	</div>
	<div class="offcanvas-body">
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
		<div id="sign">
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
</div>

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
		background-color: #f0dfc6;
		font-family: 30px;
		border-radius: 25px;
	}

	#sign-up {
		position: absolute;
		right: 15px;
		top: 20px;
		font-weight: bold;
		display: flex;
		align-items: center;
		height: 30px;
		background-color: #f0dfc6;
		border-radius: 25px;
		padding: 0 10px;
	}

	 #offcanvasScrolling {
		z-index: 200;
	 }
</style>
