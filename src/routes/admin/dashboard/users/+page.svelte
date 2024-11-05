<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div id="users-container">
	<h1>Users</h1>
	<div class="row">
		{#each data.appUsers as user}
			<div class="card col-lg-4 col-md-6 col-sm-12">
                <p class="user-id">ID {user.id}</p>
                <div class="row">
                    <div class="card-image col-lg-12 col-md-12 col-sm-3">
                        {#if user.image != null && user.image != undefined}
                            <img
                                class="card-img-top img-fluid"
                                src="data:image/png;base64, {user.image}"
                                title="user"
                                alt="avatar"
                            />
                        {:else}
                            <img
                                class="card-img-top img-fluid"
                                src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                title="user"
                                alt="avatar"
                            />
                        {/if}
                    </div>
                    <div class="card-body col-lg-12 col-md-12 col-sm-9">
                        <p class="name">{user.lastname} {user.firstname}</p>
                        <p>Email : {user.email}</p>
                        <p>Date of birth : {user.date_of_birth}</p>
                        <p>Country : {user.country} - City : {user.city}</p>
                        <p>Address : {user.address}</p>
                    </div>
                </div>
			</div>
		{/each}
	</div>
</div>

<style>
	#users-container {
		margin-top: 70px;
		padding: 0 10%;
		display: flex;
		flex-wrap: wrap;
	}

	.card {
		font-family: Arial, Helvetica, sans-serif;
		padding: 10px;
		border-radius: 5px;
	}

	.card-image {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 15px;
	}

	.card-img-top {
		max-width: 80px;
		max-height: 80px;
	}

    .card-body > p {
        margin: 5px;
    }

    .user-id {
        font-weight: bold;
        position: absolute;
        top: 20px;
        left: 30px;
    }

	.name {
		font-weight: bold;
	}
</style>
