### Writing content
You can put your markdown files in the `content` folder. Deadsimple will map a url to a markdown file from the top of this directory. For an example, `/blog/hello-world` url will map to `/content/blog/hello-world.md`.

### Navigating content
Still a WIP. For now, you can link external pages in normal Markdown like [this](about).

### Changing themes
You can change the theme from `content\partials\header.html` file. Change the following line's theme attribute to anything you will find on [bootswatch](http://bootswatch.com). 


```html
<xmp theme="slate" style="display:none;">
```