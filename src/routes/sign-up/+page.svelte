<script lang="ts">
	import { AppUser } from '../../classes/AppUser';
	import Breadcrumb from '../../components/Breadcrumb.svelte';
	import Nav from '../../components/Nav.svelte';

    let user: AppUser;
    user = new AppUser(0, new Date(), "", "", "", "", new Date(), "", "", "", "", "", "", "");

</script>

<Nav />
<div id="sign-up-page" class="container">
	<Breadcrumb />

	<!-- Sign up Form -->
	<form>
        <h1>Sign up form</h1>
        <div class="form-row">
            <div class="mb-3">
                <label for="login" class="form-label">Login</label>
                <input required type="text" class="form-control" id="login" minlength="1" bind:value={user.login}/>
            </div>

            <div class="mb-3">
                <label for="gender" class="form-label">Gender</label>
                <select required class="form-select" aria-label="Default select example">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Bigender">Bigender</option>
                    <option value="Genderfluid">Genderfluid</option>
                    <option value="Polygender">Polygender</option>
                    <option value="Agender">Agender</option>
                    <option value="Genderqueer">Genderqueer</option>
                    <option value="Other">Other</option>
                </select>
            </div>

        </div>
		
        <div class="form-row">
            <div class="mb-3">
                <label for="firstname" class="form-label">Firstname</label>
                <input required type="text" class="form-control" id="firstname" minlength="1" />
            </div>
    
            <div class="mb-3">
                <label for="lastname" class="form-label">Lastname</label>
                <input required type="text" class="form-control" id="lastname" minlength="1" />
            </div>

            <div class="mb-3">
                <label for="birth-date" class="form-label">Birth date</label>
                <input required type="date" class="form-control" id="birth-date" value="1970-01-01" />
            </div>
        </div>
		

        <div class="form-row">
            <div class="mb-3">
                <label for="country" class="form-label">Country</label>
                <input required type="text" class="form-control" id="country" minlength="1" />
            </div>
    
            <div class="mb-3">
                <label for="city" class="form-label">City</label>
                <input required type="text" class="form-control" id="city" minlength="1" />
            </div>
        </div>
		
        <div class="mb-3 long-input">
            <label for="address" class="form-label">Address</label>
            <input required type="text" class="form-control" id="address" minlength="1" />
        </div>
		
        <div class="form-row">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input required type="email" class="form-control" id="email" minlength="10" />
            </div>
    
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" minlength="8" required />
            </div>
        </div>

        <div class="mb-3 long-input">
            <label for="avatar" class="form-label">Avatar</label>
            <input type="password" class="form-control" id="avatar" minlength="10" required />
        </div>

		<button type="submit" class="btn btn-primary">Register</button>
	</form>
</div>

<style>
	#sign-up-page {
		width: 100vw;
		min-height: 100vh;
		margin-top: 80px;
	}

    h1 {
        margin: 50px 0;
    }

    form > .form-row {
        display: flex;
        justify-content: flex-start;
    }

    .form-row > div {
        margin-left: 50px;
    }

    label {
        font-weight: bold;
    }

    .long-input {
        margin-left: 50px;
    }

    .btn {
        margin-top: 20px;
        margin-left: 50px;
    }
</style>
