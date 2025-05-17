<script lang="ts">
	import ModuleHeader from '$lib/components/ModuleHeader.svelte';
	import TextModule from '$lib/components/TextModule.svelte';
    import GridModule from '$lib/components/GridModule.svelte';
	import ListModule from '$lib/components/ListModule.svelte';
	import LinkListModule from '$lib/components/LinkListModule.svelte';
	import BlockContent from '$lib/components/BlockContent/BlockContent.svelte';
    let { data } = $props();
    console.log(data);
</script>

<span id="_pageTop"></span>
<div class="h-[calc(100dvh-12rem)] pt-60">
    <div class="flex h-full w-dvw items-center justify-center px-4.5">
        <div class="max-w-2xl">
        <BlockContent value={data.homePage.homepageContent}></BlockContent>

        </div>
</div>
</div>

{#each data.homePage.sections as section}
    <div id={section.slug.current} class="pt-48 min-h-dvh">
    <ModuleHeader title={section.title}></ModuleHeader>

    <div class="flex w-dvw items-center justify-center px-4.5">

    {#if section._type === 'textModule'}
        <TextModule value={section.body}></TextModule>
    {:else if section._type === 'gridModule'}
        <GridModule gridItems={section.gridItems}></GridModule>
    {:else if section._type === 'listModule'}
        <ListModule listItems={section.listItems}></ListModule>
    {:else if section._type === 'linkListModule'}
        <LinkListModule listItems={section.listItems} ></LinkListModule>
    {/if}
    </div>


    </div>

{/each}
