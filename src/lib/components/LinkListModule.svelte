<script lang="ts">
	import BlockContent from './BlockContent/BlockContent.svelte';

	let { listItems } = $props();
</script>

	<div class="flex flex-col max-w-4xl w-full gap-4 text-sm px-4">
		{#each listItems as item}
			<div class="flex gap-4">
				{#if item.subinfo}
					<div class="w-32 shrink-0">{item.subinfo}</div>
				{/if}
				{#if item.title}
                    {#if item.link}
                        <a href={item.link} target="_blank" class="hover:underline">
                    	<div class="font-bold ">{item.title}</div>

                        </a>

                    {:else}
					<div class="font-bold">{item.title}</div>

                    {/if}
				{/if}
			</div>
		{/each}
	</div>


