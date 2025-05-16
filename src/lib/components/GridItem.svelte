<script lang="ts">
	import { getThumbnailImg } from '$lib/sanity';
	import BlockContent from './BlockContent/BlockContent.svelte';

	let { item } = $props();
</script>

				{#if item.image}
						<img src={getThumbnailImg(item.image)} />
					{/if}
					{#if item.header}
						<div>{item.header}</div>
					{/if}
					{#if item.body}
						<div><BlockContent value={item.body}></BlockContent></div>
					{/if}

