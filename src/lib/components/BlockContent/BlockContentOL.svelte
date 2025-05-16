<script lang="ts">
    let { children } = $props();
</script>
<ol class="list-inside list-decimal ml-4">
    {@render children()}
</ol>