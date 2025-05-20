<script lang="ts">
    let { title } = $props();
    import vertTexture from '$lib/images/VERT.png';

</script>

<div  class="w-dvw border-y border-green  mb-12 flex">
    <div  style="background-image: url('{vertTexture}'); background-size: 1000px;"  class="bg-field flex-grow min-w-4"></div>
    <div class="max-w-4xl px-4 w-full text-field bg-green">    {title}</div>
    <div class="flex-grow min-w-4 bg-green"></div>

</div>