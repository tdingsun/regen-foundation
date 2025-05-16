<script lang="ts">
    let { copyright, textOnlyPages} = $props(); 
</script>

<div class="fixed  bottom-0 left-0">
    <div>{copyright}</div>
</div>

<div class="fixed bottom-0 right-0 gap-4 flex">
    {#each textOnlyPages as page}
        <a href="/doc/{page.slug.current}">{page.title}</a>
    {/each}
</div>