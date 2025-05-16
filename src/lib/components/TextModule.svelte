<script lang="ts">
	import BlockContent from "./BlockContent/BlockContent.svelte";

    let {value} = $props();
</script>


<div class="min-h-dvh w-dvw flex justify-center items-center">
    <div class="max-w-xl">
        <BlockContent {value}></BlockContent>
    </div>
</div>