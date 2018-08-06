# mdx-frontmatter-loader

Adds front-matter to @mdx-js exports.

Dependencies:

- `remark-frontmatter`
- `front-matter`

## Config

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

## Usage


Import both the Mdx component and front-matter attributes:

```
import WhateverMarkdown, { attributes as whateverMetadata } from './whatever.md'
```

Then use in JSX like so:

```
<h1>{ whateverMetadata.title }</h1>
<WhateverMarkdown />
```

---

MIT (c) some1else
