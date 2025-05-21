<script lang="ts">
	import BGGrid from '$lib/components/BGGrid.svelte';
	import ModuleHeader from '$lib/components/ModuleHeader.svelte';
	import TextModule from '$lib/components/TextModule.svelte';
	import GridModule from '$lib/components/GridModule.svelte';
	import ListModule from '$lib/components/ListModule.svelte';
	import LinkListModule from '$lib/components/LinkListModule.svelte';
	import BlockContent from '$lib/components/BlockContent/BlockContent.svelte';
	import { onMount } from 'svelte';
	import { siteState } from '$lib/states.svelte.js';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	let { data } = $props();

	let sectionDivs = $state({});

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		var windowHeight = window.innerHeight || document.documentElement.clientHeight;
		var windowWidth = window.innerWidth || document.documentElement.clientWidth;

		return (
			rect.left >= 0 &&
			rect.top >= 0 &&
			rect.left + rect.width <= windowWidth &&
			rect.top + rect.height <= windowHeight
		);
	}

	onMount(() => {
		document.addEventListener('scroll', (e) => {
			let entries = Object.entries(sectionDivs);

			for (let i = 0; i < entries.length; i++) {
				if (isElementInViewport(entries[i][1])) {
					siteState.sectionInView = entries[i][0];
					break;
				}
			}
			Object.values(sectionDivs).forEach((el) => {});
		});
	});
</script>

<BGGrid></BGGrid>

<span id="_pageTop"></span>
<div  bind:this={sectionDivs["_pageTop"]} class="h-[calc(100dvh-12rem)] pt-60">
	<div class="flex h-full w-dvw items-center justify-center px-4.5">
		<div class="max-w-2xl text-lg">
			<BlockContent value={data.homePage.homepageContent}></BlockContent>
		</div>
	</div>
</div>

{#each data.homePage.sections as section}
	<div id={section.slug.current} class="min-h-dvh pt-24 sm:pt-48">
		<div bind:this={sectionDivs[section.slug.current]}>
			<ModuleHeader title={section.title}></ModuleHeader>
		</div>

		<div class="flex w-dvw items-center justify-center px-4.5">
			{#if section._type === 'textModule'}
				<TextModule value={section.body} cta={section.cta}></TextModule>
			{:else if section._type === 'gridModule'}
				<GridModule gridItems={section.gridItems}></GridModule>
			{:else if section._type === 'listModule'}
				<ListModule listItems={section.listItems}></ListModule>
			{:else if section._type === 'linkListModule'}
				<LinkListModule listItems={section.listItems}></LinkListModule>
			{/if}
		</div>

		{#if section.slug.current === 'news'}
			<NewsletterForm headerText={data.siteInfo.newsletterHeaderText} buttonText={data.siteInfo.newsletterButtonText} successText={data.siteInfo.newsletterSuccessText}></NewsletterForm>
		{/if}
	</div>
{/each}
