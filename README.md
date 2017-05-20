# Headless
A "Material Design" oriented Ghost.js theme - [View Demo](http://headfullofnothing.com/)

![Headless](https://cloud.githubusercontent.com/assets/3741213/9129710/12e28ed2-3c90-11e5-9794-993b122128c1.png)

## About

Headless's responsive design attempts to blend the prevailing "minimalism" (subtle, monochrome, washed-out) of newer blog themes with the "bold, graphic and intentional" approach of Material Design. The theme is built on Google's [MDL](http://www.getmdl.io/) library, derived from [Casper](https://github.com/TryGhost/Casper) and hopefully mediates some of the seemingly diametrical opposition between these two (very-opinionated) design styles.

## Installation

1. `git clone https://github.com/jacksonsouza/headless.git`
2. Follow [these](https://www.ghostforbeginners.com/how-to-upload-a-theme/) steps for your respective Ghost hosting platform to install and begin using the theme.

## Usage

+ All example content is derived from my blog, in case you were wondering. This theme was designed to meet my needs as a "text-first" content creator.
+ I have included two completely custom pages to escape limitations in the standard `post.hbs`: `page-about` (replacing the standard author page) & `page-work` (to support a basic portfolio). Please feel free to edit their content directly in the HTML.
  + On adding a page: for example, to add the About page to your theme - simply create a page in the Ghost.js platform named "About" and point the url to `/about`. As this is an alternative to the default `author` page, any `about` backlinks should lead here. 
  + Another note about these pages: they will not look pretty on a fresh install of this theme - insert your own images & content and you'll be good to go!
+ The image on the post loop display card is your "Post Image".
+ You can edit the navigation links in `partials/navigation.hbs`
+ The large header abbreviation is your "Blog Description". For the best effect, use a 4 letter acronym. Similarly, the logo is your "Blog Logo" - both of which can be reached in Settings.
+ Much of the scaffolding for this project is borrowed from Casper (this was my first crack at Ghost.js theme development), though this is not simply a "re-skin". Be aware of this when scrutinizing the code.


## Theme Dependencies

All included in `/assets`, no `bower install` needed

+ SASS: for styling
+ MDL & Casper: for theme
+ jQuery
