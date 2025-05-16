import { getTextOnlyPage } from '$lib/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({params}) => {
    const content = await getTextOnlyPage(params.slug);
    return { content }
}