<script lang="ts">
	import { AppUser } from '../../classes/AppUser';
	import Breadcrumb from '../../components/Breadcrumb.svelte';
	import Nav from '../../components/Nav.svelte';

	let user: AppUser;
	user = new AppUser(0, new Date(), '', '', '', '', new Date(), '', '', '', '', '', '', '');

	function logUser() {
		console.log(user);
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

			<button type="submit" on:click={logUser} class="btn btn-primary">Register</button>
		</form>
	</div>
</div>

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

    input, select {
        background-color: #F8F9FA;
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
</style>
