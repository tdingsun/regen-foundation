<script lang="ts">
	import BlockContent from "./BlockContent/BlockContent.svelte";

    let {value, cta=undefined} = $props();
</script>


    <div class="max-w-4xl w-full px-4 text-lg">
            
        <BlockContent {value}></BlockContent>
            {#if cta}
        <div class="w-full flex justify-center mt-24">
            <a href={cta.link} target="_blank" class="px-8 bg-green text-field font-bold py-2">{cta.label}</a>
        </div>
        {/if}
    </div>


