<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/logo.svg';
	import diagonalTexture from '$lib/images/DIAGONAL.png';
	import dotsSmallTexture from '$lib/images/DOT-SMALL.png';
	import dotsTexture from '$lib/images/DOTS.png';
	import gridTexture from '$lib/images/GRID.png';
	import vertTexture from '$lib/images/VERT.png';
	import { siteState } from '$lib/states.svelte';
	let { blurb, sections, donateLabel, donateLink } = $props();
</script>

<div
	class="{page.url.pathname.startsWith('/doc')
		? 'hidden'
		: ''} border-green fixed top-0 w-dvw text-xs"
>
	<div class="bg-field flex w-full items-center border-inherit">
		<a
			href={page.url.pathname === '/' ? `#_pageTop` : `/#_pageTop`}
			class="bg-green shrink-0 cursor-pointer select-none"
		>
			<img src={logo} class="relative h-18 shrink-0 pl-4 pr-8 py-2" />
		</a>

		<div class=" flex h-18 flex-grow flex-col">
			<div class="border-green flex h-12 items-center justify-between border-b">
				<div class="">
					{#if blurb}
						<span class="hidden min-[1151px]:flex px-6">
							{blurb}
						</span>
					{/if}
				</div>
				<div class="border-green flex h-full items-center border-l">
					{#if sections}
						<div class="flex">
							{#each sections as section}
									<a
										href={page.url.pathname === '/'
											? `#${section.slug.current}`
											: `/#${section.slug.current}`}
										class="relative p-3 first:pl-6 last:pr-6 md:p-4 md:first:pl-8 md:last:pr-8 group {siteState.sectionInView ===
										section.slug.current
											? 'font-bold'
											: ''}"
									>
										<span class="absolute group-hover:underline">
											{section.title}
										</span>
										<span aria-hidden="true" class="font-bold opacity-0 pointer-events-none">{section.title}</span>
									</a>
							{/each}
						</div>

							{#if donateLabel && donateLink}
								<a
									href={donateLink}
									class="text-field bg-green flex h-full items-center px-8 text-sm font-bold hover:underline"
									>{donateLabel}</a
								>
							{/if}
					{/if}
				</div>
			</div>
			<div class="border-green flex w-full flex-grow border-b">
				<div
					style="background-image: url('{diagonalTexture}'); background-size: 1000px;"
					class="border-green h-full basis-1/3 border-r bg-center"
				></div>
				<div
					style="background-image: url('{dotsSmallTexture}'); background-size: 1500px;"
					class="border-green h-full basis-1/6 border-r bg-center"
				></div>
				<div
					style="background-image: url('{gridTexture}'); background-size: 1000px;"
					class="border-green h-full basis-1/3 border-r bg-center"
				></div>
				<div
					style="background-image: url('{diagonalTexture}'); background-size: 1000px;"
					class="border-green h-full basis-1/6 bg-center"
				></div>
			</div>
		</div>
	</div>
	<div class="bg-field h-2 w-dvw border-b border-inherit"></div>
	<div class="bg-field flex h-2 w-dvw border-b border-inherit">
		<div class="h-full flex-grow basis-1/2"></div>
		<div
			style="background-image: url('{vertTexture}'); background-size: 1000px;"
			class="h-full flex-grow basis-1/2 bg-center"
		></div>
	</div>
	<div
		style="background-image: url('{dotsTexture}'); background-size: 500px; background-position: center 1px;"
		class=" bg-field h-2 w-dvw border-b border-inherit bg-center"
	></div>
	<div
		style="background-image: url('{gridTexture}'); background-size: 1000px; background-position: center 17.5px;"
		class="bg-field h-4 w-dvw border-b border-inherit"
	></div>
</div>
