<script lang="ts">
	import { getThumbnailImg } from "$lib/sanity";
	import BlockContent from "./BlockContent/BlockContent.svelte";

    let {listItems} = $props();
</script>


    <div class="flex flex-wrap justify-center max-w-4xl gap-12 px-4">
{#each listItems as item}
        <div class="flex gap-4">
            {#if item.image}
                <div class="w-48 shrink-0">
                       <img class="w-full" src={getThumbnailImg(item.image)}/>

                </div>

            {/if}
           <div>
                <div class="mb-4">
     {#if item.header}
                                <div class="font-bold leading-snug">{item.header}</div>

                {/if}
                    {#if item.subheader}
                                <div class="text-xs">{item.subheader}</div>

                {/if}
                </div>
           
                {#if item.body}
                    <div class="text-xs"><BlockContent value={item.body}></BlockContent>

                </div>
                {/if}
            
           </div>

        </div>
 
    {/each}
    </div>
    
