<script>
	/** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Users</h1>

<div id="users-container">
    {#each data.appUsers as user }
        <div class="card">
            <p>ID : {user.id}</p>
            <img src="data:image/png;base64, {user.image}" title="user" alt="avatar">
            <p class="name">{user.lastname} {user.firstname}</p>
            <p>Email : {user.email}</p>
            <p>Date of birth : {user.date_of_birth}</p>
            <p>Country : {user.country} - City : {user.city}</p>
            <p>Address : {user.address}</p>
        </div>
    {/each}
</div>

<style>
    #users-container {
        padding: 0 10%;
        display: flex;
        flex-wrap: wrap;
    }

    .card {
        font-family: Arial, Helvetica, sans-serif;
        width: 30%;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }

    .name {
        font-weight: bold;
    }
    
</style>

