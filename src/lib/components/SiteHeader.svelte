<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/logo.svg';
	let { blurb, sections } = $props();
</script>

<div
	class="{page.url.pathname.startsWith('/doc')
		? 'hidden'
		: ''} border-green fixed top-0 w-dvw text-xs"
>
	<div
		class="bg-field flex w-full items-center justify-between gap-8 border-b border-inherit pt-3.5 pr-8 pb-2.5 pl-4"
	>
		<a
			href={page.url.pathname === '/' ? `#_pageTop` : `/#_pageTop`}
			class="cursor-pointer select-none"
		>
			<img src={logo} class="relative -top-2 w-40" />
		</a>
		<div>
			{#if blurb}
				{blurb}
			{/if}
		</div>
		<div class="flex gap-8">
			{#if sections}
				{#each sections as section}
					<a
						href={page.url.pathname === '/'
							? `#${section.slug.current}`
							: `/#${section.slug.current}`}
						class="hover:underline">{section.title}</a
					>
				{/each}
			{/if}
		</div>
	</div>
	<div class="bg-field h-6 w-dvw border-b border-inherit"></div>
	<div class="bg-field h-3 w-dvw border-b border-inherit"></div>
	<div class="bg-green h-3 w-dvw border-b border-inherit"></div>
	<div class="bg-field h-3 w-dvw border-b border-inherit"></div>
</div>
