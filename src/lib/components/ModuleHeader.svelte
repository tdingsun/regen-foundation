<script lang="ts">
    let { title } = $props();
</script>

<div class="w-dvw border-y border-green  mb-12 flex">
    <div class="flex-grow min-w-4"></div>
    <div class="max-w-4xl px-4 w-full text-field bg-green">    {title}</div>
    <div class="flex-grow min-w-4 bg-green"></div>

</div>