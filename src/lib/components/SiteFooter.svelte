<script lang="ts">
	import { page } from '$app/state';
	let { copyright, textOnlyPages } = $props();
</script>

<div class="{page.url.pathname.startsWith('/doc') ? 'hidden' : ''} text-xs">
	<div class="fixed bottom-4 left-8">
		<div>{copyright}</div>
	</div>

	<div class="fixed right-8 bottom-4 flex gap-8">
		{#each textOnlyPages as page}
			<a href="/doc/{page.slug.current}" target="_blank" class="hover:underline">{page.title}</a>
		{/each}
	</div>
</div>
