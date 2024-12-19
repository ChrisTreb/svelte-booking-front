<script lang="ts">
    import { onMount } from 'svelte';
    import PlaceCard from './PlaceCard.svelte';
	import type { Place } from '../classes/Place';

    export let places: Place[] = [];
    export let itemsPerPage: number = 6;

    let currentPage: number = 1;
    let totalPages: number = Math.ceil(places.length / itemsPerPage);

    const paginate = (page: number): void => {
        currentPage = page;
    };

    let paginatedPlaces: Array<{ id: number; name: string; [key: string]: any }> = [];

    $: paginatedPlaces = places.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    onMount((): void => {
        totalPages = Math.ceil(places.length / itemsPerPage);
    });
</script>

<div class="places-paginator">
    <div class="places-grid row">
        {#each paginatedPlaces as place}
            <PlaceCard {place} />
        {/each}
    </div>

    <div class="pagination-controls">
        {#if currentPage > 1}
            <button on:click={() => paginate(currentPage - 1)}><i class="fa-solid fa-angle-left"></i></button>
        {/if}

        {#each Array(totalPages).fill(0) as _, i}
            <button
                class:active={currentPage === i + 1}
                on:click={() => paginate(i + 1)}
            >
                {i + 1}
            </button>
        {/each}

        {#if currentPage < totalPages}
            <button on:click={() => paginate(currentPage + 1)}><i class="fa-solid fa-angle-right"></i></button>
        {/if}
    </div>
</div>

<style>
    .pagination-controls {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .pagination-controls button {
        padding: 10px 15px;
        border: none;
        background-color: #f0dfc6;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s;
    }

    .pagination-controls button:hover {
        transform: scale(0.95);
    }

    .pagination-controls button.active {
        background-color: #d4b483;
    }

    @media (max-width: 600px) {
        .places-grid {
            flex-direction: column;
            align-items: center;
        }

        .pagination-controls {
            width: 100%;
            flex-direction: row;
            gap: 5px;
        }

        .pagination-controls button {
            width: 100%;
            padding: 8px 10px;
        }
    }
</style>