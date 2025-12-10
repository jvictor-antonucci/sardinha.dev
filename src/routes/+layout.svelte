<script lang="ts">
  import Sidebar from "$lib/components/custom_components/sidebar.svelte";
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";

  let { children } = $props();
</script>

<ModeWatcher />
<div class="bg-background">
  <div class="flex flex-col relative md:flex-row">
    <Sidebar></Sidebar>
    <main class="relative w-full mt-10 md:mt-0 md:ml-72">
      <div
        class="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6"
      >
        {@render children()}
      </div>
    </main>
  </div>
</div>
