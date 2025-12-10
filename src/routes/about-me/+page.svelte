<script>
  import { fly } from "svelte/transition";

</script>

<div class="flex flex-col gap-2" in:fly={{ y: 50, duration: 300 }}>
  <h1 class="font-bold text-2xl sm:text-3xl">Sobre mim</h1>
</div>
