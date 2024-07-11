import { fetchComic } from "$api"

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load() {
  return { comic: await fetchComic() }
}
