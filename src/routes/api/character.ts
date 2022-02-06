import { getAllCharacters, getCharacterInfo } from '$lib/content/characters';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ query }) => {
	if (query.has('id')) {
		const charId = query.get('id');
		const info = await getCharacterInfo(charId);
		if (info) {
			return {
				status: 200,
				body: JSON.stringify(info),
				headers: {
					'content-type': 'application/json'
				}
			};
		}
	} else if (query.has('all') && query.get('all')) {
		const infoObjs = await getAllCharacters(query.has('invis') && query.get('invis') == '1');
		return {
			status: 200,
			body: JSON.stringify([...infoObjs]),
			headers: {
				'content-type': 'application/json'
			}
		};
	}
	return {
		status: 400
	};
};
