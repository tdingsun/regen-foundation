<script lang="ts">
	import { getThumbnailImg } from '$lib/sanity';
	import BlockContent from './BlockContent/BlockContent.svelte';

	let { item } = $props();
</script>

<div class="sm:basis-1/4">
	<div class="flex flex-col gap-2">
		{#if item.link}
			<a href={item.link} target="_blank" class="group sm:basis-1/4 flex flex-col gap-4">
				{#if item.image}
					<img src={getThumbnailImg(item.image)} class=" max-w-48 sm:max-w-36 self-center" />
				{/if}
				{#if item.header}
					<div class="text-lg leading-snug font-bold group-hover:underline">{item.header}</div>
				{/if}
			</a>
		{:else}
			{#if item.image}
				<img src={getThumbnailImg(item.image)} class="max-w-48 sm:max-w-36 self-center" />
			{/if}
			{#if item.header}
				<div class="text-lg leading-snug font-bold">{item.header}</div>
			{/if}
		{/if}
		{#if item.body}
			<div class="text-xs"><BlockContent value={item.body}></BlockContent></div>
		{/if}
	</div>
</div>
