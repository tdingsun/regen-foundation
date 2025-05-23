<script lang="ts">
    let { children } = $props();
</script>
<ul class="list-outside list-disc my-4 ml-12">
    {@render children()}
</ul>