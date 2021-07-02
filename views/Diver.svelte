<script>
 export let name;
 export let location;
 export let depths;

</script>

      <div class="card">
        <h1>{name}</h1>
        <h3>{location}</h3>
        <h3>{depths}</h3>
    </div>
  
<style>
 
h1 {
  color: black;
}

h3 {
  color: #204f6e;
  margin-bottom: 10px;;
}

.card {
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
}

</style>