# Deadsimple

A dead simple static site ~~generator~~ server that converts your markdown to bootstrap based html.

# Why?

When I want a static site hosted, I want it to be *dead simple*. Ideally, I'd write markdown files, put them in a bunch of directories, link them together, and I'd have a static site that would automatically style them and serve. No configurations, no commands to parse/compile/generate/publish. 

# How does it work?

Write your `md` files, put them into the `content` directory. There's already an index.md there that you can edit. Deadsimple will map a url to a markdown file from the top of this directory. For an example, `/blog/hello-world` url will map to `/content/blog/hello-world.md`. Markdown will be converted to html on the client, and styled with bootstrap thanks to the excellent [Strapdown.js](http://strapdownjs.com) library.