<script>
	/** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Users</h1>

<div id="users-container">
    <div class="row">
        {#each data.appUsers as user }
            <div class="card col-3">
                <img class="card-img-top img-fluid" src="data:image/png;base64, {user.image}" title="user" alt="avatar">
                <div class="card-body">
                    <p>User id : {user.id}</p>
                    <p class="name">{user.lastname} {user.firstname}</p>
                    <p>Email : {user.email}</p>
                    <p>Date of birth : {user.date_of_birth}</p>
                    <p>Country : {user.country} - City : {user.city}</p>
                    <p>Address : {user.address}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    #users-container {
        margin-top: 50px;
        padding: 0 10%;
        display: flex;
        flex-wrap: wrap;
    }

    .card {
        font-family: Arial, Helvetica, sans-serif;
        padding: 15px;
        border-radius: 5px;
    }

    .card-img-top {
        max-width: 50px;
        max-height: 50px;
    }

    .name {
        font-weight: bold;
    }
    
</style>

