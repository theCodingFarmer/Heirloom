| Enviromment   | Status   |
| ------------- | -------- | 
| Dev           | [![Netlify Status](https://api.netlify.com/api/v1/badges/15721b89-622e-4b4a-8fc5-6433b71d7992/deploy-status)](https://app.netlify.com/sites/heirloomfarm-dev/deploys)     | 
| Prod          | [![Netlify Status](https://api.netlify.com/api/v1/badges/aa9c2904-d115-4d9c-9ca1-f426d5697811/deploy-status)](https://app.netlify.com/sites/heirloomfarm/deploys)   |



# Heirloom Farm 👨🏻‍🌾
> A local CSA Farm Site built with Sanity and Gatsby

# Quick start

To start the project locally run `yarn start`. This command open two new tabs and run Sanity and Gatsby as well as start a browser window to start development. Go to the following: 
- Sanity Studio runs at [http://localhost:3333](http://localhost:3333)
- Gatsby runs at [http://localhost:8000/](http://localhost:8000/)
- GraphQL Playground for Gatsby [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

## Root Level Commands:
- `yarn sanity-graphql` - run this after data structure changes  (run from the root)
- `yarn sanity-deploy` - Running this command builds and deploys the studio, making it available on [heirloom.sanity.studio](https://heirloomfarm.sanity.studio). 
- `yarn sanity-undeploy` - run to change the hostname or remove the Studio from the web

# Customize

## Icons

Under `src/components/_config` you will find further files that allow for configuration of _social_ and _navigation_ icons.  

Some parts of the app still uses [Font Awesome Solid Icons](https://fontawesome.com/icons?d=gallery&s=solid&m=free).

### Navigation

To change or add further menu links you can adjust the maps in `client/src/components/_config/menu-links.js`.   

### Social

In `client/src/components/_config/social-icon-list.js` you are able to add further social links or edit the link property to point to your social profiles. Those social links are currently displayed in the _header_ and _footer_. Feel free to reuse them where ever
you like.

## Change the Theme

In order to change the colors of the theme you can just change the values of the css variables in the `client/src/styles/variables.styl` file. Every color in the _CSS_ is based on those css variables. This allows you to quickly apply a different theme of your choice.

```styl
  // Colors
  --bg-color #fff
  --bg-content-color #61605c
  --overlay-bg-content-color #7b9b56
  --title-color #00f7ff
  --title-color-dark #61605c
  --title-color-light #fff
  --paragraph-text-light #fff
  --paragraph-text-dark #61605c
  --paragraph-text-accent #908F8A
  --body-color #ced8de
  --primary-color #e9bf14
  --secondary-color #7b9b56
  --disabled-color #888
  --card-font-color #fff
  //Colors with transparency
  --content-box-container rgba(123, 155, 86, 0.20)
  --card-tint-color rgba(65.9, 45.9, 25.5, 0.35)
  // Dimensions & Form
  --radius 10px
  --space 3.5rem
  --header-height 80px
  --header-color rgba(65.9, 45.9, 25.5, 0.50)
  --content-width 860px
  --transition-fast 0.2s
  --transition-normal 0.4s
  --transition-slow 0.6s
  // Misc
  --bg-code rgba(0, 0, 0, 0.3)
  --border-color rgba(255, 255, 255, 0.1)
```

# Content Creation

All content can be modified from the [Sanity Studio](https://heirloomfarm.sanity.studio).

- Home Page
- What We Grow 
- Farmer's Blog

## Home Page

In order to edit the home landing page content log into the Sanity [studio](https://heirloomfarm.sanity.studio). Click on the content section `Home Page` to edit the content displayed on the home page. Sections that can be modified: 

- Hero Banner Intro, title, tag line and description as well as background image.
- How It works title and steps
- About Us title, header, description, image and highlight tags
- Card Grids description, card creation and order
- Feature products (see `Creating What We Grow Products` below) with title order of feature products and link title to all products
- Contact us message, address, email and phone number


## Creating Blog Posts

In order to create a blog post log into the Sanity [studio](https://heirloomfarm.sanity.studio). Click on the content section `Farmer's Blog` to create new blog posts.

## Creating What We Grow Products

In order to create products log into the Sanity [studio](https://heirloomfarm.sanity.studio). Click on the content section `What We Grow` to create new product posts. All of these products are accessible to the user from the `See Everything We Grow ->` link on the home page. The featured products under the `What We Grow` section on the home page are selected from this list of all the products created. 

