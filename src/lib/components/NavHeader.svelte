<script lang="ts">
    import { page } from '$app/state';
    import logo from '$lib/images/logo.svg'
    let { blurb, sections } = $props();
</script>

<div class="{page.url.pathname.startsWith('/doc') ? 'hidden' : ''}">
    <div class="flex justify-between p-4 top-0 fixed w-dvw bg-field">
        <a href={page.url.pathname === '/' ? `#_pageTop` : `/#_pageTop`} class="cursor-pointer select-none">
            <img src={logo}/>
        </a>
        <div>
            {#if blurb}
                {blurb}
            {/if}
        </div>
        <div>
            {#if sections}
                {#each sections as section}
                    <a href={page.url.pathname === '/' ? `#${section.slug.current}` : `/#${section.slug.current}`}>{section.title}</a>
                {/each}
            {/if}
        </div>
    </div>
</div>