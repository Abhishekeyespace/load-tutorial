<script>
    export let data;
    const {movies} = data;
</script>

<h1>Movies</h1>

<div>
    {#each movies as movie}
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </div>
    {/each}
</div>


<style>
    h1 {
        justify-content: center;
        font-family: monospace;
        color: #333;
        text-decoration: none;
    }

    div {
        justify-content: center;
        font-family: monospace;
        color: #333;
        text-decoration: none;
        flex-direction: column;

    }

    h2 {
        justify-content: left;
        font-family: monospace;
        color: #333;
        text-decoration: none;
    }
    p {
        justify-content: center;
        font-family: monospace;
        color: #333;
        text-decoration: none;
    }
</style>