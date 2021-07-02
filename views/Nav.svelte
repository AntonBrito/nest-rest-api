<script>
const { default: Home }=require("./Home.svelte");

</script>
<div class="navbar bg-primary">
  <h1>ScubaLog</h1>
  
</div>

<style>
  .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  border-bottom: #204f6e;
  opacity: 0.9;
  margin-bottom: 1rem;
} 

.bg-primary {
  background: #204f6e;
  color: #fff;
}

.navbar h1 {
  margin-bottom: 0.6rem;
  margin-right: 0.6rem;
}
</style>