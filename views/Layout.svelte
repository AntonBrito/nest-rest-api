<script>
  import Nav from './Nav.svelte';
  
  let name = "Anton Diver1";
  let location = "Jamestown, RI"
  let dives = 30;
  
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
    <main>
      <h1>{name}</h1>
      <h3>{location}</h3>
      <h3>{dives}</h3>
    </main>
  </body>
</html>

<style>
  :global(body) {
    background-color: white;
  }

  body {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background-color: #fff;
  color: #333;
}

h1 {
  color: black;
}

h3 {
  color: #204f6e
}
</style>