import {GiBarn} from 'react-icons/gi';
import S from '@sanity/desk-tool/structure-builder';

export default () =>
    S.list()
        .title('Heirloom Farm Content')
        .items(
            [
                S.listItem()
                    .title('Home Page')
                    .icon(GiBarn)
                    .child(
                        S.document()
                            .schemaType('pageHome')
                            .documentId('pageHome')
                    ),
                ...S.documentTypeListItems().filter((item) =>
                    !['pageHome'].includes(item.getId()))
            ]
        );
