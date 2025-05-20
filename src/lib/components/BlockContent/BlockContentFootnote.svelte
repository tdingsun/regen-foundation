<script lang="ts">
    import BlockContent from "$lib/components/BlockContent/BlockContent.svelte";
	import { onMount } from "svelte";
    let { portableText } = $props();

    let footnote: HTMLSpanElement;
    let highlighted = $state(false);

    onMount(() => {
        footnote.parentElement?.parentElement?.append(footnote);
    })

    const highlightFootnote = () => {
        highlighted = true;
        setTimeout(() => {
            highlighted = false;
        }, 1000)
    }
</script>


<a onclick={highlightFootnote} href="#{portableText.markKey}" class=" -top-1 text-xs relative hover:underline cursor-pointer px-0.5">
    {portableText.plainTextContent}
</a>

<div id={portableText.markKey} bind:this={footnote} class="p-2 -left-2 rounded-md w-[calc(100%+1rem)] relative {highlighted ? 'bg-acid' : 'bg-transparent'} flex gap-2 bg-acid rounded-xs transition-colors my-4">
   <span>{portableText.plainTextContent}: </span>
   <BlockContent value={portableText.value.text}></BlockContent>
</div>