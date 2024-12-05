<script>
	import { EMOJI_STAR } from '../const/emoji';
	import { setRandPlaceImg } from '../dao/placeDao';
	import ButtonPlaceEdit from './ButtonPlaceEdit.svelte';

	/** @type { any } */
	export let place;
	/** @type {number} */
	export let placeId = place.id;

	setRandPlaceImg(place);
</script>

<div class="col-card col-lg-4 col-md-6 col-sm-12">
	<div class="card">
		<ButtonPlaceEdit {placeId} />
        <div class="card-img" style="background-image: url('{place.image}');">
            <h6 class="rating">{place.rating} {EMOJI_STAR}</h6>
            <h5 class="card-title">{place.name}</h5>
        </div>
		<div class="card-body">
			<p><b>Country&nbsp;&nbsp;&nbsp;</b>{place.country}</p>
            <p><b>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> {place.city}</p>
			<p class="card-text">
				{place.description}
			</p>
		</div>
		<a href="/place/{place.id}" class="btn btn-place">Go {place.country}</a>
	</div>
</div>

<style>
	.col-card {
		margin-bottom: 20px;
	}

	.card {
		height: 100%;
	}

    .card-img {
        width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
        background-image: url();
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-title {
        font-weight: bold;
        color: white;
        padding: 10px;
        background-color: rgba(51, 51, 51, 0.700);
    }

    .rating {
        width: 50px;
        color: white;
        font-weight: bold;
        padding: 5px;
        margin: 5px;
        background-color: rgba(51, 51, 51, 0.700);
        border-radius: 5px;
    }

    .card-body > p {
        margin-bottom: 5px;
    }

	.card-text {
		width: 100%;
		height: auto;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		overflow: hidden;
	}

	.btn-place {
		margin: 10px 50px;
		border-radius: 25px;
		background-color: #f0dfc6;
	}
</style>
