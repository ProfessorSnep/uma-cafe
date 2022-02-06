import { getPageMarkdown, listPagePaths } from '$lib/content/pages';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ query }) => {
	if (query.has('page')) {
		const page = query.get('page');
		const md = await getPageMarkdown(page);
		if (md) {
			return {
				status: 200,
				body: md
			};
		}
	} else if (query.has('all') && query.get('all')) {
		const pagePaths = await listPagePaths();
		return {
			status: 200,
			body: JSON.stringify([...pagePaths]),
			headers: {
				'content-type': 'application/json'
			}
		};
	}
	return {
		status: 400
	};
};
