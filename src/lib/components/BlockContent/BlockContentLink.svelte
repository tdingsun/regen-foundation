<script lang="ts">
    let { portableText } = $props();
</script>
<a href={portableText.value.href} target="_blank" class=" underline hover:font-bold transition-colors">
    {portableText.plainTextContent}
</a>