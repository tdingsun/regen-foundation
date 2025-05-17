<script lang="ts">
	import { getThumbnailImg } from '$lib/sanity';
	import BlockContent from './BlockContent/BlockContent.svelte';

	let { item } = $props();
</script>
<div class="flex flex-col gap-3">
				{#if item.image}
						<img src={getThumbnailImg(item.image)} class="max-w-36 self-center" />
					{/if}
					{#if item.header}
						<div class="font-bold leading-snug">{item.header}</div>
					{/if}
					{#if item.body}
						<div class="text-xs"><BlockContent value={item.body}></BlockContent></div>
					{/if}


</div>

