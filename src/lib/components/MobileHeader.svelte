<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/logo.svg';
	import diagonalTexture from '$lib/images/DIAGONAL.png';
	import dotsSmallTexture from '$lib/images/DOT-SMALL.png';
	import dotsTexture from '$lib/images/DOTS.png';
	import gridTexture from '$lib/images/GRID.png';
	import vertTexture from '$lib/images/VERT.png';
	import { siteState } from '$lib/states.svelte';
	let { blurb, sections } = $props();
    let menuExpanded = $state(false);
</script>

<div
	class="{page.url.pathname.startsWith('/doc')
		? 'hidden'
		: ''} border-green fixed top-0 w-dvw text-xs"
>
	<div class="bg-green flex w-full h-18 items-center  justify-between border-inherit">
		<a
			href={page.url.pathname === '/' ? `#_pageTop` : `/#_pageTop`}
			class=" shrink-0 cursor-pointer select-none"
		>
			<img src={logo} class="relative h-16 shrink-0 px-4 py-2" />
		</a>
        <div onclick={() => {menuExpanded = !menuExpanded}} class="h-full flex flex-col p-5 gap-2 justify-between">
            <div class="bg-field h-1  w-8">
            </div>
            <div class="bg-field h-1 w-8">
            </div>
            <div class="bg-field h-1 w-8">
            </div>
        </div>
	</div>
    <div class="grid {menuExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-150">
        <div class="overflow-hidden">
{#if sections}
						<div class="flex flex-col bg-field">
							{#each sections as section}
								{#if section.slug.current !== 'support'}
									<a onclick={() => menuExpanded = false}
										href={page.url.pathname === '/'
											? `#${section.slug.current}`
											: `/#${section.slug.current}`}
										class="relative p-4 group text-base {siteState.sectionInView ===
										section.slug.current
											? 'font-bold'
											: ''}"
									>
										<span class="absolute group-hover:underline">
											{section.title}
										</span>
										<span aria-hidden="true" class="font-bold opacity-0 pointer-events-none">{section.title}</span>
									</a>
								{/if}
							{/each}
						</div>

						{#each sections as section}
							{#if section.slug.current === 'support'}
								<a onclick={() => menuExpanded = false}
									href={page.url.pathname === '/'
										? `#${section.slug.current}`
										: `/#${section.slug.current}`}
									class="text-field bg-green flex  items-center p-4 text-base font-bold hover:underline"
									>{section.title}</a
								>
							{/if}
						{/each}
					{/if}
        </div>
        
    </div>
	<div
		style="background-image: url('{gridTexture}'); background-size: 800px; background-position: center -40px;"
		class="bg-field h-6 w-dvw "
	></div>
</div>
