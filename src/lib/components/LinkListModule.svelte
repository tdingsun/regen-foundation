<script lang="ts">
	import BlockContent from './BlockContent/BlockContent.svelte';

	let { listItems } = $props();
</script>

<div class="flex min-h-dvh w-dvw items-center justify-center">
	<div class="flex flex-col max-w-4xl gap-4">
		{#each listItems as item}
			<div class="flex gap-4">
				{#if item.subinfo}
					<div>{item.subinfo}</div>
				{/if}
				{#if item.title}
                    {#if item.link}
                        <a href={item.link} target="_blank">
                    	<div>{item.title}</div>

                        </a>

                    {:else}
					<div>{item.title}</div>

                    {/if}
				{/if}
			</div>
		{/each}
	</div>
</div>
