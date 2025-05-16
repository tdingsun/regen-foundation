<script lang="ts">
    let { children } = $props();
</script>
<ul class="list-inside list-disc my-4">
    {@render children()}
</ul>