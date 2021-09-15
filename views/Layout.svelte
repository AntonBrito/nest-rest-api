<script>
  import Nav from './Nav.svelte';
  import Dive from './Dive.svelte';

  let dives = [
		{
			name: "Anton",
			location: "KeyWest, FL",
			depth: 12,
		},
		{
			name: "Riley",
			location: "CapCod, RI",
			depth: 20,
		},
		{
			name: "Belmas",
			location: "Prainha, CapeVerde",
			depth: 12,
		}
	];

</script>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width-device-width, initial-scale=1.0" />
    <meta name="description" content="nestjs app with svelte template" />
    %head%
  </head>
  <body>
    <header>
      <Nav />
    </header>
    <div class="container">
      {#if dives.length === 0}
      <p>No Divers</p>
      {:else}
      {#each dives as dive}
      <Dive name={dive.name} location={dive.location} depth={dive.depth} />
      {/each}
      {/if}
    </div>
  </body> 
</html>

<style>

  body {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background-color: #fff;
  color: #333;
}

</style>