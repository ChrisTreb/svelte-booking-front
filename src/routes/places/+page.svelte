<script>
	/** @type {import('./$types').PageData} */
    export let data;
</script>


<h1>Hotels</h1>

<div id="places-container">
    {#each data.places as place }
        <div class="card">
            <p class="name">{place.name}</p>
            <p>Email : {place.email}</p>
            <p>Country : {place.country} - City : {place.city}</p>
            <p>Address : {place.address}</p>
            <p>Phone number : {place.phone_number}</p>
            <p>Rating : {place.rating}</p>
            <a href="/place/{place.id}" class="btn btn-primary">Go {place.country}</a>
        </div>
    {/each}
</div>

<style>
    #places-container {
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

