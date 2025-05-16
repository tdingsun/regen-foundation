<script lang="ts">
	import BlockContent from '$lib/components/BlockContent/BlockContent.svelte';
    let { data } = $props();
    console.log(data);

</script>


<div class="w-dvw min-h-dvh flex justify-center p-8 sm:py-24">
    <div class="max-w-2xl text-sm">
        <div>{data.content.title}</div>
        <div>{data.content.author}</div>
        <div>{data.content.publishDate}</div>
        <BlockContent value={data.content.content}></BlockContent>
    </div>
</div>