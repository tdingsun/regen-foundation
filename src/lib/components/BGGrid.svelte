<script lang="ts">
	import { onMount } from "svelte";

    let numRows = $state(new Array(20));
    let numCols = $state(new Array(20));
    onMount(() => {
                    numRows = new Array(Math.ceil(window.innerHeight / 144) * 2);
            numCols = new Array(Math.ceil(window.innerWidth / 144) * 4);
        window.onresize = () => {
            numRows = new Array(Math.ceil(window.innerHeight / 144) * 2);
            numCols = new Array(Math.ceil(window.innerWidth / 144) * 4);
        }
    })
</script>
<div class="fixed top-0 left-0 w-dvw h-dvh flex justify-center items-center overflow-hidden -z-1 bg-field">
    {#each numCols as col}
    <div class=" border-light-green -top-24 relative flex-grow-0 flex-shrink-0 w-40 border-l first:border-l-0 border-dashed">
        {#each numRows as row}
            <div class="border-light-green border-b first:border-l-0 border-dashed aspect-square w-full"></div>
        {/each}
    </div>
        
    {/each}

</div>