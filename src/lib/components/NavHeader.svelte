<script lang="ts">
    import logo from '$lib/images/logo.svg'
    let { blurb, sections } = $props();
</script>

<div>
    <div class="flex justify-between p-4 top-0 fixed w-dvw bg-field">
        <div>
            <img src={logo}/>
        </div>
        <div>
            {#if blurb}
                {blurb}
            {/if}
        </div>
        <div>
            {#if sections}
                {#each sections as section}
                    <a href="#{section.slug.current}">{section.title}</a>
                {/each}
            {/if}
        </div>
    </div>
</div>