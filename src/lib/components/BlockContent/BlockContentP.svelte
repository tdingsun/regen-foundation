<script lang="ts">
    let { children, class: className = '' } = $props();
</script>
<p class="mb-4 last:mb-0 relative font-spaceGrotesk {className}">
    {@render children()}
</p>