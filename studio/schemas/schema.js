import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import farmersBlog from './contentSchemas/farmersBlog';
import whatWeGrow from './contentSchemas/whatWeGrow';
import pageHome from './contentSchemas/pageHome';
import hero from './contentSchemas/hero';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
      pageHome,
      hero,
      farmersBlog,
      whatWeGrow
  ]),
})
