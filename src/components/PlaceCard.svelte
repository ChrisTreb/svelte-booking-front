<script>
	import { EMOJI_STAR } from '../const/emoji';
	import { setRandPlaceImg } from '../dao/placeDao';
	import ButtonPlaceEdit from './ButtonPlaceEdit.svelte';

    /** @type { any } */
    export let place;
    /** @type {number} */
    export let placeId = place.id
    
    setRandPlaceImg(place);
</script>

<div class="col-card col-lg-4 col-md-6 col-sm-12">
    <div class="card">
        <ButtonPlaceEdit {placeId} />
        <img src={place.image} title="place" alt="place"/>
        <div class="card-body">
            <h5 class="card-title">{place.name}</h5>
            <h6>{place.rating} {EMOJI_STAR}</h6>
            <p>Pays : {place.country} - Ville : {place.city}</p>
            <p class="card-text">
                {place.description}
            </p>
        </div>
        <a href="/place/{place.id}" class="btn btn-primary btn-place">Go {place.country}</a>
    </div>
</div>

<style>
    .col-card {
        margin-bottom: 20px;
    }

    .card {
		height: 100%;
	}

	.card-text {
		width: 100%;
		height: auto;
	}

    .btn-place {
        margin: 10px 50px;
        border-radius: 25px;
    }
</style>