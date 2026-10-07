---
title: "A sample essay"
date: "2026-08-20"
summary: "Delete this file once you've written something real — it's here to show you the frontmatter format."
draft: true
---

This file lives at `content/writing/hello.md`. Every `.md` file in that folder
becomes an essay automatically — the filename is the URL slug, and the block at
the top (the "frontmatter") sets the title, date, and summary.

## Frontmatter fields

| Field     | Required | Notes                                       |
| --------- | -------- | ------------------------------------------- |
| `title`   | yes      | Shown on the index and at the top of the page |
| `date`    | yes      | `YYYY-MM-DD`. Sorts newest first             |
| `summary` | no       | One line under the title on the index        |
| `draft`   | no       | `true` hides it in production                |

## What you can write

Standard markdown works: **bold**, *italic*, [links](https://example.com),
`inline code`, lists, blockquotes, tables, and images.

> A blockquote looks like this. Useful for pulling out a line you want
> someone to remember.

```ts
// Code blocks are styled too.
const posts = await getPosts();
```

That's the whole system. Write a file, push it, it's live.
