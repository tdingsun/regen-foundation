<script lang="ts">
	import BlockContent from "./BlockContent/BlockContent.svelte";

    let {value} = $props();
</script>


    <div class="max-w-4xl w-full px-4">
            
        <BlockContent {value}></BlockContent>
    </div>
