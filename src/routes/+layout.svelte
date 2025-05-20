<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import '../app.css';

	let { children, data } = $props();
</script>


<svelte:head>
	<link rel="icon" href={data?.siteInfo?.favicon?.url ? data.siteInfo.favicon.url : ''} />
	<title>{data?.siteInfo?.siteTitle ? data.siteInfo.siteTitle : 'Friends With Benefits'}</title>
	<meta
		name="description"
		content={data?.siteInfo?.siteDescription
			? data.siteInfo.siteDescription
			: 'A new kind of social network.'}
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://www.fwb.help" />
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content={data.siteInfo.siteTitle ? data.siteInfo.siteTitle : 'Friends With Benefits'}
	/>
	<meta
		property="og:description"
		content={data.siteInfo.siteDescription
			? data.siteInfo.siteDescription
			: 'A new kind of social network.'}
	/>
	<meta property="og:image" content={data.siteInfo.siteImgURL ? data.siteInfo.siteImgURL : ''} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="fwb.help" />
	<meta property="twitter:url" content="https://www.fwb.help" />
	<meta
		name="twitter:title"
		content={data.siteInfo.siteTitle ? data.siteInfo.siteTitle : 'Friends With Benefits'}
	/>
	<meta
		name="twitter:description"
		content={data.siteInfo.siteDescription
			? data.siteInfo.siteDescription
			: 'A new kind of social network.'}
	/>
	<meta name="twitter:image" content={data.siteInfo.siteImgURL ? data.siteInfo.siteImgURL : ''} />
</svelte:head>

{@render children()}
<SiteHeader blurb={data?.siteInfo?.headerText} sections={data?.sections}></SiteHeader>
<SiteFooter copyright={data?.siteInfo?.copyrightText} textOnlyPages={data?.siteInfo?.textOnlyPages}></SiteFooter>