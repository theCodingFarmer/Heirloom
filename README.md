| Enviromment   | Status   |
| ------------- | -------- | 
| Dev           | [![Netlify Status](https://api.netlify.com/api/v1/badges/15721b89-622e-4b4a-8fc5-6433b71d7992/deploy-status)](https://app.netlify.com/sites/heirloomfarm-dev/deploys)     | 
| Prod          | [![Netlify Status](https://api.netlify.com/api/v1/badges/aa9c2904-d115-4d9c-9ca1-f426d5697811/deploy-status)](https://app.netlify.com/sites/heirloomfarm/deploys)   |



# Heirloom Farm 👨🏻‍🌾


## Table of Contents

- [Quick Start](#quick-start)
- [Customize](#customize)
  - [Gatsby Configuration](#gatsby-configuration)
  - [Change the Theme](#change-the-theme)
  - [Icons](#icons)
    - [Navigation](#navigation)
    - [Social](#social)
- [Content Creation](#content-creation)
  - [Creating Blog Posts](#creating-blog-posts)
    - [Frontmatter for blog posts](#frontmatter-for-blog-posts)
  - [Creating AllThatWeGrow](#creating-projects)
    - [Frontmatter for projects](#frontmatter-for-projects)

# Quick start

To start the project run `yarn start`. This command open two new tabs and run Sanity and Gatsby as well as start a browser window to start development.

#### Other commands to note:
`yarn sanity-graphql` - run this after data structure changes  (run from the root)

# Customize

## Gatsby Configuration

To make it easy for you we made sure you can configure as much as possible with the `gatsby-config.js` already.
All you have to do is change the relevant values. For reference you can find an overview of the config below:

```js
siteMetadata: {
  title: 'Level 2',
  titleTemplate: '%s · Level 2',
  image: '/images/logo.png',
  author: 'Max Mustermann',
  description: 'Gatsby starter to quickly setup your portfolio and boost it to the next level.',
  url: 'https://knochenmark.github.io',
  paginationPageSize: 4, // Amount of posts displayed per listing page.
},
```

## Icons

Under `src/components/_config` you will find further files that allow for configuration of _social_ and _navigation_ icons.  

Some parts of the app still uses [Font Awsome Solid Icons](https://fontawesome.com/icons?d=gallery&s=solid&m=free).

### Navigation

To change or add further menu links you can adjust the maps in `src/components/_config/menu-links.js`.   


### Social

In `src/components/_config/social-icon-list.js` you are able to add further social links or edit the link property to point to your social profiles. Those social links are currently displayed in the _header_ and _footer_. Feel free to reuse them where ever
you like.

## Change the Theme

In order to change the colors of the theme you can just change the values of the css variables in the `src/styles/variables.styl` file. Every color in the _CSS_ is based on those css variables. This allows you to quickly apply a different theme of your choice.

```styl
body
  // Colors
  --bg-color #252839
  --bg-content-color #1b1d2a
  --title-color #fff
  --body-color #ced8de
  --primary-color #F1B631
  --secondary-color #f18731
  // Dimensions & Form
  --radius 6px
  --space 3.5rem
  --header-height 80px
  --content-width 860px
  // Transition Times
  --transition-fast 0.2s
  --transition-normal 0.4s
  --transition-slow 0.6s
  // Misc
  --bg-code rgba(0, 0, 0, 0.3)
  --border-color rgba(255, 255, 255, 0.1)
```

# Content Creation

All content files and the information for the sections on the index page can be found in the `content` folder.

The folder contains subfolders for:

- blog posts
- projects
- sections

## Creating Blog Posts

In order to create a blog post you just have to add a markdown file under `content/posts` and move images that are used in your blog post into `content/posts/images`.

### Frontmatter for blog posts

The frontmatter information for each blog post is structured as following:

| Field         | Type     | Description             | Example               |
| ------------- | -------- | ----------------------- | --------------------- |
| date          | Date     | Publishing Date         | 2020-05-31            |
| title         | String   | Post Title              | 'Some title'          |
| tags          | String[] | List of Tags            | ['foo', 'bar']        |
| published     | Boolean  | Is Published Flag       | true                  |
| cover_image   | String   | Path of the Cover Image | ./images/my-image.jpg |
| canonical_url | Boolean  | is Canonical Link Flag  | false                 |
| description   | String   | Post short description  | 'Some Description'    |

---

Followed by the actual Blog content written in Markdown.

## Creating AllThatWeGrow Products

In order to create a project you create a markdown file under `content/projects` and move images that are used for your project into `content/projects/images`.

### Frontmatter for projects

The frontmatter information for each blog post is structured as following:

| Field       | Type     | Description             | Example                             |
| ----------- | -------- | ----------------------- | ----------------------------------- |
| date        | Date     | Publishing Date         | 2020-05-31                          |
| title       | String   | Project Title           | 'Gatsby Portfolio'                  |
| highlights  | String[] | List of Tags            | ['React', 'Gatsby']                 |
| featured    | Boolean  | Is Featured Flag        | true                                |
| cover_image | String?  | Path of the Cover Image | ./images/my-image.jpg               |
| repo_link   | String?  | URL to the repository   | 'https://github.com/facebook/react' |
| demo_link   | String?  | Post short description  | 'https://reactjs.org/'              |

---

Followed by the actual Project description in Markdown.

## Editing Section information

To be added
