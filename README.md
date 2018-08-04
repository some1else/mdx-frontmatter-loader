# mdx-frontmatter-loader

Use to add front-matter to @mdx-js exports.

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
      // Adds frontmatter to export
      loader: 'mdx-frontmatter-loader',
    },
    {
      loader: '@mdx-js/loader',
      options: {
        mdPlugins: [
          [
            // Remove frontMatter from body output
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


Import both Mdx component and frontmatter attributes:

```
import WhateverMarkdown, { attributes as whateverMetadata } from './whatever.md'
```

Then use in JSX like so:

```
<h1>{ whateverMetadata.title }</h1>
<WhateverMarkdown />
```

MIT (c) some1else