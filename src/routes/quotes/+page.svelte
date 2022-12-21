<script>
  export let data;
  const {quotes,users} = data;
  
</script>

<h1>Quotes</h1>
<div>
{#each quotes as quote}
  <div>
    <h2>{quote.author}</h2>
    <p>{quote.quote}</p>
  </div>
{/each}
</div>
<h1>Users</h1>
<div>
{#each users as user}
  <div>
    <h2>{user.firstName}</h2>
    <p>{user.email}</p>
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
