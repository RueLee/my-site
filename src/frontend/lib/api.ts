import { notFound } from "next/navigation";

const apiUrl = "https://www.ruleonlee.com/api/";

export async function getApiPost(slug: string) {
    const res = await fetch(`${apiUrl}blogposts/${slug}`);
    if (!res.ok) { return notFound(); }
    return res.json();
}

export async function getAllApiPosts() {
    const res = await fetch(`${apiUrl}blogposts`);
    if (!res.ok) { return notFound(); }
    return res.json();
}