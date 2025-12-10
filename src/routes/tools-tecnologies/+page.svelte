<script lang="ts">
  import TecnologiesCard from "$lib/components/custom_components/tecnologies-card.svelte";
    import type { Tecnologies } from "./technologies";
    import { frontEndList } from "./technologies";
  import { fly } from "svelte/transition";

  let frontEnd: Tecnologies[] = frontEndList;
</script>

<div class="flex flex-col gap-2" in:fly={{ y: 50, duration: 300 }}>
  <h1 class="font-bold text-2xl sm:text-3xl">Ferramentas e tecnologias</h1>
  <p class="opacity-80">
    Confira as ferramentas e tecnologias que tenho experiência e utilizo no meu
    dia a dia. Todos os ítens foram usados em projetos que foram para produção.
  </p>
</div>
<section
  class="mt-4 flex flex-col gap-6"
>
  <h2 class="font-medium text-xl sm:text-2xl" in:fly={{ x: -20, duration: 300, delay: 50 }}>Front-end</h2>
  <div class="flex flex-row flex-wrap gap-x-4 gap-y-4" in:fly={{ y: 50, duration: 300, delay: 50 }}>
    {#each frontEnd as tech}
      <TecnologiesCard label={tech.label} colors={tech.colors} filledIcon={tech.filledIcon} outlinedIcon={tech.outlinedIcon}></TecnologiesCard>
    {/each}
  </div>
</section>
