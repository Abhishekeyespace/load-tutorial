<nav>
	<a href="/">Home</a>
	<a href="/quotes" data-sveltekit-prefetch>Quotes</a>
	<a href="/movies" data-sveltekit-prefetch>Movies</a>
</nav>
<slot />

<style>
    nav {
        display: flex;
        align-items: left;
        justify-content: left;
        gap: 1rem;
        padding: 1rem;
        background: #eee;
    }
    a { 
        font-size: larger;
        font-family: monospace;
        color: #333;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>