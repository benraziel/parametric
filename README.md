Parametric
==========

Parametric is a UI library for manipulating variables in javascript. It allows to easily embed modern looking, themable UIs for controlling web experiments.

###[Live Demo](TBD.com)

###
![Dark Theme](http://benraziel.github.io/parametric/screenshots/parametric-dark.png) ![Light Theme](http://benraziel.github.io/parametric/screenshots/parametric-light.png)

The library is heavily inspired by [DAT.gui](https://code.google.com/p/dat-gui/). It is built on top of [Polymer](www.polymer-project.org), which allows using new web standards such as Web Componenets and Shadow DOM.

Features
========
+ Theme support - comes with built-in light and dark themes
+ Tab Navigation
+ Sliders
+ Toggle Buttons
+ Dropdown Menus
 
Getting Started
===============

1. Copy the files under the _dist_ folder into your project.
2. Include _platform.js_ as the first script in your HTML page. This script contains polyfills for polymer features which are still unsupported by browsers. Since it is quite large, it is recommended that you include it from a CDN: ```<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.3.3/platform.js"></script>```  
3. Add a reference to the _parametric-ui_ polymer element: ```<link rel="import" href="../dist/parametric-ui.html">```
4. Embed the _parametric-ui_ element in your HTML: ```<parametric-ui id="parametric"></parametric-ui>```
5. To avoid flickering when the page loads, add "unresolved" next to your body tag, like so: ```<body unresolved>``` More information about this is available [here](http://www.polymer-project.org/docs/polymer/styling.html).
6. Add your controls by editing _parametric-ui.html_. More info on this is available below
 
Adding Controls
===============
TBD

###Selecting a Theme

###Tabs

###Slider

###Toggle Button

###Dropdown Menu

Accessing Values
===============
TBD