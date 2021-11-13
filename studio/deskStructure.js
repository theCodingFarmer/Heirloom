import S from '@sanity/desk-tool/structure-builder';

export default () =>
    S.list()
        .title('Site Content')
        .items(
            [
                S.listItem()
                    .title('Home Page')
                    .child(
                        S.document()
                            .schemaType('pageHome')
                            .documentId('pageHome')
                    ),
                ...S.documentTypeListItems().filter((item) =>
                    !['pageHome'].includes(item.getId()))
            ]
        );
