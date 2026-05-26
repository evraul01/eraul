export interface SEOMeta {
	title: string;
	description: string;
	keywords?: string[];
	image?: string;
	type?: 'website' | 'article';
}

export function getSEOMetaTags(meta: SEOMeta): string {
	const tags = [
		`<title>${meta.title}</title>`,
		`<meta name="description" content="${meta.description}" />`,
		`<meta property="og:title" content="${meta.title}" />`,
		`<meta property="og:description" content="${meta.description}" />`,
		`<meta property="og:type" content="${meta.type || 'website'}" />`,
		`<meta name="twitter:card" content="summary_large_image" />`,
		`<meta name="twitter:title" content="${meta.title}" />`,
		`<meta name="twitter:description" content="${meta.description}" />`
	];

	if (meta.keywords && meta.keywords.length > 0) {
		tags.push(`<meta name="keywords" content="${meta.keywords.join(', ')}" />`);
	}

	if (meta.image) {
		tags.push(`<meta property="og:image" content="${meta.image}" />`);
		tags.push(`<meta name="twitter:image" content="${meta.image}" />`);
	}

	return tags.join('\n\t');
}
