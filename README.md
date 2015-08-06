#Headless
A "Material Design" oriented Ghost.js theme - [View Demo](http://headfullofnothing.com/)


Screenshot (Mobile/Desktop)

## About

Headless's responsive design attempts to blend the previaling "minimalism" (subtle, monochrome, washed-out) of newer blog themes with the "bold, graphic and intentional" approach of Material Design. The theme is built on Google's [MDL](http://www.getmdl.io/) library, derived from [Casper](https://github.com/TryGhost/Casper) and hopefully mediates some of the seemingly diametrical opposition between these two (very-opnionated) design styles.

## Installation

1. `git clone https://github.com/jacksonsouza/headless.git`
2. Follow [these](https://www.ghostforbeginners.com/how-to-upload-a-theme/) steps for your respective Ghost hosting platform to install and begin using the theme.

## Quirks & Usage

+ All example content is derived from my blog, in case you were wondering
+ I have included two completely custom pages `page-about` & `page-work` please feel free to edit their content in the HTML. On adding: for example, to add the About page to your theme, simply add a page in the Ghost.js platform named "About" and point the url to `about`
+ You can edit the navigation links in `partials/navigation.hbs`
+ The large header abbreviation is your "Blog Description". For the best effect, use a 4 letter acronym.
+ Much functionality is borrowed from Casper, although this is not simply a "reskin" - please be aware of this when scrutinizing the code.


## Theme Dependancies

All included in `/assets`

+ SASS: for styling
+ MDL & Casper: for theme
+ jQuery