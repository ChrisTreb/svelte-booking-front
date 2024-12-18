<script lang="ts">
    import L from 'leaflet';
	import { getPlaceCoordinates } from '../dao/placeDao';

    let map: L.Map;
	
    export let placeId: number;

    async function initMap() {

        let data: any = await getPlaceCoordinates(placeId);

		if (typeof window !== 'undefined') {
			map = L.map("map").setView([ data.lat , data.lng], 13);
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
				subdomains: ['a', 'b', 'c']
			}).addTo(map);

			// Add marker
			L.marker([ data.lat , data.lng]).addTo(map);
		}
	}
    initMap();
</script>