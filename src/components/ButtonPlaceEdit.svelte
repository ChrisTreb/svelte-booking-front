<script lang="ts">
	import type { Place } from "../classes/Place";
    
    export let place : Place;
</script>

<a class="edit-btn" href="/place-editor?id={place.id}&mode=Update"><i class="fa-solid fa-pencil"></i></a>

<style>
    .edit-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: white;
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: rgb(70, 70, 70);
        width: 40px;
        height: 40px;
        border-radius: 50px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
</style>