import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import farmersBlog from './contentSchemas/farmersBlog';
import whatWeGrow from './contentSchemas/whatWeGrow';
import pageHome from './contentSchemas/pageHome';
import hero from './contentSchemas/hero';
import howItWorksSteps from './contentSchemas/howItWorksStep';
import howItWorks from './contentSchemas/howItWorks';
import aboutUs from './contentSchemas/aboutUs';
import cardGrid from './contentSchemas/cardGrid';
import cardGridCard from './contentSchemas/cardGridCard';
import contactUs from './contentSchemas/contactUs';
import featuredProducts from './contentSchemas/featuredProducts';
import Shop from './shopSchemas/Shop';

export default createSchema({
  // We name our schema
  name: 'heirloomFarm',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
      pageHome,
      farmersBlog,
      whatWeGrow,
      //hidden content schemas
      hero,
      howItWorks,
      howItWorksSteps,
      aboutUs,
      cardGrid,
      cardGridCard,
      featuredProducts,
      contactUs
  ]),
})
