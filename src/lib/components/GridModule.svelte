<script lang="ts">
	import GridItem from './GridItem.svelte';

	let { gridItems } = $props();
</script>

	<div class="flex max-w-sm sm:max-w-4xl flex-wrap justify-between gap-x-4 gap-y-16 px-8 sm:px-4">
		{#each gridItems as item}
			<GridItem {item}></GridItem>
		{/each}
	</div>
