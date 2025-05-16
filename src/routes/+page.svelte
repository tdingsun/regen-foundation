<script lang="ts">
	import ModuleHeader from '$lib/components/ModuleHeader.svelte';
	import TextModule from '$lib/components/TextModule.svelte';
    import GridModule from '$lib/components/GridModule.svelte';
	import ListModule from '$lib/components/ListModule.svelte';
	import LinkListModule from '$lib/components/LinkListModule.svelte';
    let { data } = $props();
    console.log(data);
</script>

<TextModule value={data.homePage.homepageContent}></TextModule>

{#each data.homePage.sections as section}
    <div id={section.slug.current}>
    <ModuleHeader title={section.title}></ModuleHeader>

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

{/each}
