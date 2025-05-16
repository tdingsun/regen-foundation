<script lang="ts">
	import ModuleHeader from '$lib/components/ModuleHeader.svelte';

    let { data } = $props();
</script>

<div class="mt-24">
    <ModuleHeader title={data.siteInfo.publicationPageHeader}></ModuleHeader>
    {#each data.publications as publication}
        <a href="/publications/{publication.slug.current}">
        <hr class="text-green">
        <div>{publication.title}</div>
        <div class="flex">
        <div>By {publication.author}</div>
        <div>Published {publication.publishdate}</div>
        </div>
        </a>


    {/each}
</div>