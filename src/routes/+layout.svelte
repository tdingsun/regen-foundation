<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import '../app.css';
	import MobileHeader from '$lib/components/MobileHeader.svelte';

	let { children, data } = $props();


	let defaultTitle = "Regen Foundation"
	let defaultDek = "Regen Foundation works to empower communities and co-create global systems to achieve and reward ecological regeneration."
	let url = "https://regen.foundation";
	let domain = "regen.foundation"
</script>


<svelte:head>
	<link rel="icon" href={data?.siteMetadata?.favicon?.url ? data.siteMetadata.favicon.url : ''} />
	<title>{data?.siteMetadata?.siteTitle ? data.siteMetadata.siteTitle : defaultTitle}</title>
	<meta
		name="description"
		content={data?.siteMetadata?.siteDescription
			? data.siteMetadata.siteDescription
			: defaultDek}
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content={data.siteMetadata.siteTitle ? data.siteMetadata.siteTitle : defaultTitle}
	/>
	<meta
		property="og:description"
		content={data.siteMetadata.siteDescription
			? data.siteMetadata.siteDescription
			: defaultDek}
	/>
	<meta property="og:image" content={data.siteMetadata.siteImgURL ? data.siteMetadata.siteImgURL : ''} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={url} />
	<meta
		name="twitter:title"
		content={data.siteMetadata.siteTitle ? data.siteMetadata.siteTitle : defaultTitle}
	/>
	<meta
		name="twitter:description"
		content={data.siteMetadata.siteDescription
			? data.siteMetadata.siteDescription
			: defaultDek}
	/>
	<meta name="twitter:image" content={data.siteMetadata.siteImgURL ? data.siteMetadata.siteImgURL : ''} />
</svelte:head>

{@render children()}
<div class="hidden sm:block">
<SiteHeader donateLabel={data?.siteInfo?.donateButtonLabel} donateLink={data?.siteInfo?.donateButtonLink} blurb={data?.siteInfo?.headerText} sections={data?.sections}></SiteHeader>

</div>
<div class="block sm:hidden">
<MobileHeader donateLabel={data?.siteInfo?.donateButtonLabel} donateLink={data?.siteInfo?.donateButtonLink} blurb={data?.siteInfo?.headerText} sections={data?.sections}></MobileHeader>
</div>
<SiteFooter copyright={data?.siteInfo?.copyrightText} textOnlyPages={data?.siteInfo?.textOnlyPages}></SiteFooter>