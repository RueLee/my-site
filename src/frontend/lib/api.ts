const API_ROOT_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function getApiPost(slug: string) {
    const res = await fetch(`${API_ROOT_URL}blogposts/${slug}`);
    if (!res.ok) { throw new Error(`Unable to load API! Error Code: ${res.status}`); }
    return res.json();
}

export async function getAllApiPosts() {
    const res = await fetch(`${API_ROOT_URL}blogposts`);
    if (!res.ok) { throw new Error(`Unable to load API! Error Code: ${res.status}`); }
    return res.json();
}