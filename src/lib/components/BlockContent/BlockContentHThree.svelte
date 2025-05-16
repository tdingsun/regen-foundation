<script lang="ts">
    let { children, class: className = ""} = $props();
</script>
<h3 class="text-base font-basteB-black tracking-wide leading-[1.2] mb-4 {className}">
    {@render children()}
</h3>