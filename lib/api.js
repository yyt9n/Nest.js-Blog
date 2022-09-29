import client from './sanity';

export async function getAllBlogs() {
    const results = await client.fetch(`*[_type == "blog"]{title, subtitle, slug}`);

    return results;
}

// sanity cheat-sheet
// https://www.sanity.io/docs/query-cheat-sheet