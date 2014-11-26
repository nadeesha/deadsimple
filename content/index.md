### Writing content
You can put your content in the `content` folder. Deadsimple will map a url to a markdown file from the top of this directory. For an example, `/blog/hello-world` url will map to `/content/blog/hello-world.md`. 

### Navigating content
Still a WIP.

### Parsing
This is normal markdown. Parsed by the excellent [strapdown.js](http://www.strapdownjs.com) library, which converts your markdown to [bootstrap](http://getbootstrap.com) based html.

### Changing themes
You can change the theme from `content\partials\header.html` file. Change the following line's theme attribute to anything you will find on [bootswatch](http://bootswatch.com). 


```html
<xmp theme="slate" style="display:none;">
```