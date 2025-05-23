<script lang="ts">
	import { page } from '$app/state';
	let { copyright, textOnlyPages } = $props();
</script>

<div class="{page.url.pathname.startsWith('/doc') ? 'hidden' : ''} text-[12px]">
	<div class="fixed bottom-4 left-4 sm:left-8">
		<div>{copyright}</div>
	</div>

	<div class="fixed right-4 sm:right-8 bottom-4 flex flex-col text-right sm:flex-row  gap-x-8">
		{#each textOnlyPages as page}
			<a href="/doc/{page.slug.current}" target="_blank" class="hover:underline">{page.title}</a>
		{/each}
	</div>
</div>
