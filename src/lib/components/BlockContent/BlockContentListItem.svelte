<script lang="ts">
    let { children } = $props();
</script>
<li class="mb-2">
    <div>
        {@render children()}

    </div>
</li>