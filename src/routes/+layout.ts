import { getSiteInfo } from '$lib/sanity';
import type { LayoutLoad } from './$types';
export const load = (async () => {
    const siteInfo = await getSiteInfo();
	return siteInfo
}) satisfies LayoutLoad;
