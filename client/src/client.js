import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'rus7hoo0',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true // `false` if you want to ensure fresh data
});
