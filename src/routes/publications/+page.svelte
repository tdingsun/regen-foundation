<script lang="ts">
	import { formatDate } from '$lib/utils.ts';
	import ModuleHeader from '$lib/components/ModuleHeader.svelte';
	import BlockContent from '$lib/components/BlockContent/BlockContent.svelte';

	let { data } = $props();
</script>

<div class="my-48">
	<ModuleHeader title={data.siteInfo.publicationPageHeader}></ModuleHeader>
	<div class="flex justify-center">
		<div class="w-full max-w-4xl px-4">
			{#each data.publications as publication}
				{#if publication.showInListView}
				<div class=" group border-t border-green">
					<a target="{publication.externalLink ? '_blank' : '_top'}" href="{publication.externalLink ? publication.externalLink : `/publications/${publication.slug.current}`}">
						<div class="my-2">
							<div class="mb-2 font-bold group-hover:underline">{publication.title}</div>
							<div class="flex gap-8 text-xs">
								{#if publication.author}
																<div>By {publication.author}</div>

								{/if}
								{#if publication.publishDate}
																<div>Published {formatDate(publication.publishDate)}</div>

								{/if}
							</div>
							{#if publication.dek}
								<div class="text-xs pt-4 max-w-xl">
									<BlockContent value={publication.dek}></BlockContent>
								</div>
							{/if}
							
						</div>
					</a>
				</div>
				{/if}
				
			{/each}
		</div>
	</div>
</div>
