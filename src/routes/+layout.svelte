<script lang="ts">
  import Sidebar from '$lib/components/sidebar.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="bg-background">
	<div class="grid lg:grid-cols-5">
		<Sidebar></Sidebar>
		{@render children()}
	</div>
</div>