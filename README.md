# mdx-frontmatter-loader

Adds front-matter to @mdx-js exports.

Dependencies:

- `remark-frontmatter`
- `front-matter`

## Install

```
yarn add mdx-frontmatter-loader
```

or


```
npm install --save mdx-frontmtter-loader
```

## Configure Webpack

```
{
  test: /\.md$/,
  use: [
    'babel-loader',
    {
      // Adds front-matter to export
      loader: 'mdx-frontmatter-loader',
    },
    {
      loader: '@mdx-js/loader',
      options: {
        mdPlugins: [
          [
            // Removes front-matter from Markdown output
            require('remark-frontmatter'), 
            { type: 'yaml', marker: '-', fence: '---' },
          ],
        ],
      },
    },
  ],
},
```

## Usage in React


Import both the Mdx component and front-matter attributes:

```
import ArticleMarkdown, { attributes as articleMetadata } from './article.md'
```

Then use in JSX like so:

```
const article = (
  <article>
    <h1>{ articleMetadata.title }</h1>
    <ArticleMarkdown />
  </article>
)
```

---

MIT (c) some1else
