<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/logo.svg';
	import diagonalTexture from '$lib/images/DIAGONAL.png';
	import dotsSmallTexture from '$lib/images/DOT-SMALL.png';
	import dotsTexture from '$lib/images/DOTS.png';
	import gridTexture from '$lib/images/GRID.png';
	import vertTexture from '$lib/images/VERT.png';

	let { blurb, sections } = $props();
</script>


<div
	class="{page.url.pathname.startsWith('/doc')
		? 'hidden'
		: ''} border-green fixed top-0 w-dvw text-xs"
>
	<div class="bg-field flex w-full items-center   border-inherit">
		<a
			href={page.url.pathname === '/' ? `#_pageTop` : `/#_pageTop`}
			class="bg-green shrink-0 cursor-pointer select-none"
		>
			<img src={logo} class="relative  h-18 py-2 px-4 shrink-0" />
		</a>

		<div class=" flex flex-col flex-grow h-18">
			<div class="flex border-green border-b h-12 justify-between items-center">
				<div class="p-4">
					{#if blurb}
						{blurb}
					{/if}
				</div>
				<div class="flex  h-full items-center border-l border-green pl-8 gap-8 lg:pl-10 lg:gap-10">
					{#if sections}
						{#each sections as section}
							{#if section.slug.current == "support"}
							<a
								href={page.url.pathname === '/'
									? `#${section.slug.current}`
									: `/#${section.slug.current}`}
								class="hover:underline font-bold px-6 text-field bg-green h-full flex items-center text-base">{section.title}</a
							>
							{:else}
							<a
								href={page.url.pathname === '/'
									? `#${section.slug.current}`
									: `/#${section.slug.current}`}
								class="hover:underline">{section.title}</a
							>
							{/if}
							
						{/each}
					{/if}
				</div>
			</div>
			<div class="flex-grow border-b border-green w-full flex">
				<div style="background-image: url('{diagonalTexture}'); background-size: 1000px;" class="basis-[30%] h-full border-r border-green bg-center ">
				</div>
					<div style="background-image: url('{dotsSmallTexture}'); background-size: 1500px;" class="basis-[18%] h-full border-r border-green bg-center ">
				</div>
					<div style="background-image: url('{gridTexture}'); background-size: 1000px;" class="basis-[33%] h-full border-r border-green bg-center ">
				</div>
					<div style="background-image: url('{diagonalTexture}'); background-size: 1000px;" class="basis-[19%] h-full border-green bg-center ">
				</div>
			</div>
		</div>
	</div>
	<div class="bg-field h-2 w-dvw border-b border-inherit"></div>
	<div class="bg-field h-2 w-dvw border-b border-inherit flex">
		<div  class="h-full basis-1/2 flex-grow"></div>
		<div style="background-image: url('{vertTexture}'); background-size: 1000px;" class="h-full basis-1/2 flex-grow bg-center"></div>
	</div>
	<div style="background-image: url('{dotsTexture}'); background-size: 500px;" class=" h-2 w-dvw border-b border-inherit bg-center bg-field"></div>
	<div style="background-image: url('{gridTexture}'); background-size: 1000px; background-position: center 17.5px" class="bg-field h-4 w-dvw border-b border-inherit"></div>
</div>
