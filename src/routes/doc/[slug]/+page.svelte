<script lang="ts">
	import BlockContent from '$lib/components/BlockContent/BlockContent.svelte';
    let { data } = $props();

</script>

<div class="w-dvw min-h-dvh flex justify-center p-8 sm:py-24">
    <div class="max-w-2xl text-sm">
        <BlockContent value={data.content.content}></BlockContent>
    </div>
</div>