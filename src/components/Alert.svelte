<script lang='ts'>
    export let message: string = "";
</script>

{#if message != ""}
    <div id="alert" class="alert alert-info alert-dismissible fade show" role="alert">
        <p>{message}</p>
    </div>
{/if}

<style>
    #alert {
        width: 300px;
        min-height: 40px;
        position: fixed;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        transition: 0.2s;
    }

    p {
        margin-bottom: 0;
    }
</style>