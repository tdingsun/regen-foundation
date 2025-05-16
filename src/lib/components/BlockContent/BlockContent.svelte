<script lang="ts">
    import { PortableText, type PortableTextComponents } from '@portabletext/svelte';
    import BlockContentImg from '$lib/components/BlockContent/BlockContentImg.svelte';
    import BlockContentParagraph from '$lib/components/BlockContent/BlockContentP.svelte';
    import BlockContentLink from '$lib/components/BlockContent/BlockContentLink.svelte';
	import BlockContentHOne from './BlockContentHOne.svelte';
	import BlockContentHTwo from './BlockContentHTwo.svelte';
	import BlockContentHThree from './BlockContentHThree.svelte';
	import BlockContentUl from './BlockContentUL.svelte';
	import BlockContentOl from './BlockContentOL.svelte';
	import BlockContentListItem from './BlockContentListItem.svelte';
	import BlockContentFootnote from './BlockContentFootnote.svelte';
	import BlockContentBlockQuote from './BlockContentBlockQuote.svelte';
 let {value} = $props();
 const components: Partial<PortableTextComponents> = {
    block: {
        normal: BlockContentParagraph,
        h1: BlockContentHOne,
        h2: BlockContentHTwo,
        h3: BlockContentHThree,
        blockquote: BlockContentBlockQuote
    },
    types: {
        image: BlockContentImg,
    },
    marks: {
        link: BlockContentLink,
        footnote: BlockContentFootnote
    },
    list: {
    bullet: BlockContentUl,
    number: BlockContentOl
    },
    listItem: {
    normal: BlockContentListItem
    }
 };
 
</script>

{#if value}
    <PortableText {components} {value}></PortableText>
{/if}

