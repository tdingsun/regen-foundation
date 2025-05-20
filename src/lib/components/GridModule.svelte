<script lang="ts">
	import GridItem from './GridItem.svelte';

	let { gridItems } = $props();
</script>

	<div class="flex max-w-sm sm:max-w-4xl flex-wrap justify-between gap-x-4 gap-y-8 px-8 sm:px-4">
		{#each gridItems as item}
			{#if item.link}
				<a href={item.link} class="sm:basis-1/4">
					<GridItem {item}></GridItem>
				</a>
			{:else}
				<div class="sm:basis-1/4">
					<GridItem {item}></GridItem>
				</div>
			{/if}
		{/each}
	</div>
