# Deadsimple

A dead simple static site ~~generator~~ server that converts your markdown to bootstrap based html.

# Why?

When I want a static site hosted, I want it to be *dead simple*. Ideally, I'd write markdown files, put them in a bunch of directories, link them together, and I'd have a static site that would automatically style them and serve. No configurations, no commands to parse/compile/generate/publish. 

# How does it work?

Write your `md` files, put them into the `content` directory. There's already an index.md there that you can edit. Deadsimple will map a url to a markdown file. For an example, `/blog/hello-world` url will map to `/content/blog/hello-world.md`. Markdown will be converted to html on the client, and styled with bootstrap thanks to the excellent [Strapdown.js](http://strapdownjs.com) library.

# Installation 

## With heroku

1. Fork this repo
2. Do the changes you want (adding content, etc.)
3. Click this button to deploy to your herkou account:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Generic Installation

1. Fork this repo (or download as a zip)
2. Do the changes you want (adding content, etc.)
3. Upload it to your server and do `npm start`

# Content

## Writing new files

Write any content that you want in markdown and add it in the `content` directory. Take a look at the `index.md` for an example. Files should have the `md` extension, with the exception of header and footer.

## Changing the header/footer

You can find the `header.html` and `footer.html` inside `content\partials`.

# Contributions

There's a lot of room for improvements here. (See the todo: tags) Any contributions are highly appreciated. In search for minimalism and simplicity, I've not used any packages except for the node core modules. But it doesn't need to be that way. Being lightweight is the only requirement.