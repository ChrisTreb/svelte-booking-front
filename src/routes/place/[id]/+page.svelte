<script>
	import { EMOJI_STAR } from '../../../const/emoji';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container">
	<div class="main-row row">
		<div class="col-lg-8 col-md-12">
			<div class="place-content">
				<h1>{data.place.name}</h1>
				<div class="row mb-5">
					<div class="col-8">
						<img class="img-fluid img-place" src={data.place.image} alt="place" title={data.place.name} />
					</div>
					<div class="col-4">
						<h5>Country</h5>
						<p>{data.place.country}</p>
						<h5>City</h5>
						<p>{data.place.city}</p>
						<h5>Address</h5>
						<p>{data.place.address}</p>
						<h5>Rating</h5>
						<p>{data.place.rating} {EMOJI_STAR}</p>
					</div>
				</div>
				<h5>Phone number</h5>
				<p>{data.place.phone_number}</p>
				<h5>Email</h5>
				<p>{data.place.email}</p>
				<h4>Description</h4>
				<p>{data.place.description}</p>
			</div>
		</div>

		<div class="col-lg-4 col-md-12">
			<div class="place-rooms">

			</div>
		</div>
	</div>
</div>

<style>
	.main-row {
		min-height: 80vh;
	}

	.container {
		margin-top: 100px;
		min-height: 90vh;
	}

	.place-rooms, .place-content {
		height: 100%;
		padding: 30px 50px;
		border: 1px solid rgba(158, 158, 158, 0.35);
		border-radius: 5px;
	}
</style>
