import client from 'part:@sanity/base/client'

// Note: this assumes that every document that has a slug field
// have it on the `slug` field at the root
export const isUniqueAcrossAllDocuments = (slug, options) => {
    const {document} = options

    const id = document._id.replace(/^drafts\./, '')
    const params = {
        draft: `drafts.${id}`,
        published: id,
        slug
    }

    const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`

    return client.fetch(query, params)
};


export const todayDate = () => {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();

    return `${mm}-${dd}-${yyyy}`
}
