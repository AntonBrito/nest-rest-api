<script>
//  import axios from 'axios';
 import { createEventDispatcher } from 'svelte';
 const dispatch = createEventDispatcher();

 let  name, location, depth
 

 const onSubmit = () => {
  //  event.preventDefault();
  //  axios.post('/api/1.0/dives', { name, location, depth});
  dispatch('add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, location, depth })
  })
 }

</script>
<form on:submit={onSubmit}>
  <h1>Add Dive Log</h1>
  <label for="name">Name</label>
  <input type="text" id="name" bind:value={name} />
  <label for="location">Location</label>
  <input type="text" id="location" bind:value={location} />
  <input type="text" placeholder="Depth"id="depth" bind:value={depth} />
  <button type="submit" id="submitdivelog" on:click|preventDefault={onSubmit}>Submit</button>
</form>

<style>

input, button, select, textarea {
	font-family: inherit;
	font-size: inherit;
	-webkit-padding: 0.4em 0;
	padding: 0.4em;
	margin: 0 0 0.5em 0;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 2px;
}

label {
  margin: 0;
	padding: 0;
	display: block;
}
</style>