<script lang="ts">
	import { getThumbnailImg } from "$lib/sanity";
	import BlockContent from "./BlockContent/BlockContent.svelte";

    let {listItems} = $props();
</script>


<div class="min-h-dvh w-dvw flex justify-center items-center">
    <div class="flex flex-wrap justify-center max-w-4xl gap-4">
{#each listItems as item}
        <div class="flex gap-4">
            {#if item.image}
                <div class="w-48 shrink-0">
                       <img class="w-full" src={getThumbnailImg(item.image)}/>

                </div>

            {/if}
           <div>
                {#if item.header}
                                <div>{item.header}</div>

                {/if}
                    {#if item.subheader}
                                <div>{item.subheader}</div>

                {/if}
                {#if item.body}
                    <div><BlockContent value={item.body}></BlockContent>

                </div>
                {/if}
            
           </div>

        </div>
 
    {/each}
    </div>
    
</div>