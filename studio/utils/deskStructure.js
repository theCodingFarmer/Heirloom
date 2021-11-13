import S from '@sanity/desk-tool/structure-builder';

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Home Page')
                .child(
                    S.document()
                        .schemaType('pageHome')
                        .documentId('pageHome')
                ),
            ...S.documentTypeListItems()
        ]);
