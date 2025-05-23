<script lang="ts">
    let { children } = $props();
</script>
<ol class="list-outside list-decimal ml-12">
    {@render children()}
</ol>