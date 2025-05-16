<script lang="ts">
    import { getImgUrl } from "$lib/sanity";
	import BlockContent from "./BlockContent.svelte";
    let { portableText } = $props();
</script>

<div class="my-4">
    <img src={getImgUrl(portableText.value)} alt={portableText.value.alt ? portableText.value.alt : ''}/>
    {#if portableText.value.caption}
        <div class="text-xs mt-1">
            <BlockContent value={portableText.value.caption}></BlockContent>
    
        </div>
    {/if}
    
</div>
