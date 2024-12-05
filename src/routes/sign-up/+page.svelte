<script lang="ts">
	import { AppUser } from '../../classes/AppUser';
	import Alert from '../../components/Alert.svelte';
	import Breadcrumb from '../../components/Breadcrumb.svelte';
	import Nav from '../../components/Nav.svelte';
	import { checkIsLoginAlreadyUsed, saveUser, validateUser } from '../../dao/UserDao';

	let user: AppUser;
	let message: string;

	user = new AppUser(0, new Date(), '', '', '', '', new Date(), '', '', '', '', '', '', '');

	async function handleClickSaveUser(user: AppUser) {
		if (validateUser(user)) {
			let response = await saveUser(user);

			if (response == 200) {
				message = 'User created successfully, code : ' + response;
			} else {
				message = 'User not created, error happened during process, code : ' + response;
			}
		} else {
			message = "Please complete form";
		}
	}
</script>

<Nav />
<div id="sign-up-page" class="container">
	<Breadcrumb />
	<div>
		<!-- Sign up Form -->
		<form>
			<div class="form-row">
				<div class="mb-3">
					<label for="login" class="form-label">Login <span class="required">*</span></label>
					<input
						required
						type="text"
						class="form-control"
						id="login"
						minlength="1"
						bind:value={user.login}
					/>
				</div>

				<div class="mb-3">
					<label for="gender" class="form-label">Gender <span class="required">*</span></label>
					<select required class="form-select" bind:value={user.gender}>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Non-binary">Non-binary</option>
						<option value="Bigender">Bigender</option>
						<option value="Genderfluid">Genderfluid</option>
						<option value="Polygender">Polygender</option>
						<option value="Agender">Agender</option>
						<option value="Genderqueer">Genderqueer</option>
						<option selected value="Other">Other</option>
					</select>
				</div>
			</div>

			<div class="form-row">
				<div class="mb-3">
					<label for="firstname" class="form-label">Firstname <span class="required">*</span></label
					>
					<input
						required
						type="text"
						class="form-control"
						id="firstname"
						minlength="1"
						bind:value={user.firstname}
					/>
				</div>

				<div class="mb-3">
					<label for="lastname" class="form-label">Lastname <span class="required">*</span></label>
					<input
						required
						type="text"
						class="form-control"
						id="lastname"
						minlength="1"
						bind:value={user.lastname}
					/>
				</div>

				<div class="mb-3">
					<label for="birth-date" class="form-label"
						>Birth date <span class="required">*</span></label
					>
					<input
						required
						type="date"
						class="form-control"
						id="birth-date"
						bind:value={user.date_of_birth}
					/>
				</div>
			</div>

			<div class="form-row">
				<div class="mb-3">
					<label for="country" class="form-label">Country <span class="required">*</span></label>
					<input
						required
						type="text"
						class="form-control"
						id="country"
						minlength="1"
						bind:value={user.country}
					/>
				</div>

				<div class="mb-3">
					<label for="city" class="form-label">City <span class="required">*</span></label>
					<input
						required
						type="text"
						class="form-control"
						id="city"
						minlength="1"
						bind:value={user.city}
					/>
				</div>
			</div>

			<div class="mb-3 long-input">
				<label for="address" class="form-label">Address <span class="required">*</span></label>
				<input
					required
					type="text"
					class="form-control"
					id="address"
					minlength="1"
					bind:value={user.address}
				/>
			</div>

			<div class="form-row">
				<div class="mb-3">
					<label for="email" class="form-label">Email <span class="required">*</span></label>
					<input
						required
						type="email"
						class="form-control"
						id="email"
						minlength="10"
						bind:value={user.email}
					/>
				</div>

				<div class="mb-3">
					<label for="password" class="form-label">Password <span class="required">*</span></label>
					<input
						required
						type="password"
						class="form-control"
						id="password"
						aria-describedby="passwordHelp"
						minlength="8"
						bind:value={user.password}
					/>
					<div id="passwordHelp" class="form-text">For security purpose : 8 characters minimum</div>
				</div>
			</div>

			<div class="mb-3 long-input">
				<label for="avatar" class="form-label">Avatar</label>
				<input
					type="text"
					class="form-control"
					id="avatar"
					minlength="10"
					bind:value={user.image}
				/>
			</div>

			<button
				type="submit"
				class="col-lg-2 col-md-6 mt-3 btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#popup">Register</button
			>
		</form>
	</div>
</div>

<!-- Modal Create / Update / Delete -->
<div id="popup" class="modal" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Sign up</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<p>Register these data ?</p>
				<ul>
					<li>Login : {user.login}</li>
					<li>Email : {user.email}</li>
					<li>Firstname : {user.firstname}</li>
					<li>Lastname : {user.lastname}</li>
					<li>Country : {user.country}</li>
					<li>City : {user.city}</li>
					<li>Address : {user.address}</li>
				</ul>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button
					type="button"
					class="btn btn-primary"
					data-bs-dismiss="modal"
					on:click={() => handleClickSaveUser(user)}>Register</button
				>
			</div>
		</div>
	</div>
</div>

<!-- Alerte message -->
<Alert {message} />

<style>
	#sign-up-page {
		width: 100vw;
		min-height: 100vh;
		margin-top: 80px;
	}

	#sign-up-page > div {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	form {
		width: 50%;
	}

	form > .form-row {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.form-row > div {
		margin-left: 10px;
	}

	label {
		font-weight: bold;
	}

	.long-input {
		margin: 10px;
	}

	.btn {
		margin: 10px;
	}

	.required {
		color: red;
	}

	@media (max-width: 991px) {
		form {
			width: 100%;
		}
	}
</style>
