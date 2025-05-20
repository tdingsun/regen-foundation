<script lang="ts">
	import BlockContent from '$lib/components/BlockContent/BlockContent.svelte';
	let { data } = $props();
</script>

<div class="my-48 flex min-h-dvh w-dvw justify-center">
	<div class="max-w-2xl text-sm px-4">
		<div class="mb-2 text-3xl font-bold">{data.content.title}</div>
		<div class="flex gap-8 mb-8">
			<div>By {data.content.author}</div>
			<div>Published {data.content.publishDate}</div>
		</div>

		<BlockContent value={data.content.content}></BlockContent>
	</div>
</div>
