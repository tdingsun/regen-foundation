<script lang="ts">
	import ModuleHeader from '$lib/components/ModuleHeader.svelte';

	let { data } = $props();
</script>

<div class="mt-48">
	<ModuleHeader title={data.siteInfo.publicationPageHeader}></ModuleHeader>
	<div class="flex justify-center">
		<div class="w-full max-w-4xl px-4">
			{#each data.publications as publication}
				{#if publication.showInListView}
				<div class=" group border-t border-green py-2">
					<a
						href="/publications/{publication.slug.current} "
					>
						<div class="mb-2">
							<div class="mb-2 font-bold group-hover:underline">{publication.title}</div>
							<div class="flex gap-8 text-xs">
								<div>By {publication.author}</div>
								<div>Published {publication.publishDate}</div>
							</div>
						</div>
					</a>
				</div>
				{/if}
				
			{/each}
		</div>
	</div>
</div>
