<script lang="ts">
    let { children, class: className = "" } = $props();
</script>
<h1 class="text-4xl font-basteB-black tracking-wide leading-[1.1] mb-4 {className}">
    {@render children()}
</h1>