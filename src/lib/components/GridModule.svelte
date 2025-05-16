<script lang="ts">
	import GridItem from './GridItem.svelte';

	import { getThumbnailImg } from '$lib/sanity';
	import BlockContent from './BlockContent/BlockContent.svelte';

	let { gridItems } = $props();
</script>

<div class="flex min-h-dvh w-dvw items-center justify-center">
	<div class="flex max-w-4xl flex-wrap justify-center gap-4">
		{#each gridItems as item}
			{#if item.link}
				<a href={item.link} class="basis-1/4">
					<GridItem {item}></GridItem>
				</a>
			{:else}
				<div class="basis-1/4">
					<GridItem {item}></GridItem>
				</div>
			{/if}
		{/each}
	</div>
</div>
