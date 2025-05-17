<script lang="ts">
    let { portableText } = $props();


</script>
<a href={portableText.value.href} target={
    portableText.value.href.startsWith('#') || 
    portableText.value.href.startsWith('/') ?
    '_top' : '_blank'
} class="underline hover:font-bold transition-colors">
    {portableText.plainTextContent}
</a>