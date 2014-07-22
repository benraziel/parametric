Parametric
==========

Parametric is a modern-looking UI library for controlling web experiments.   
It is built on top of [Polymer](http://www.polymer-project.org), which allows using new web standards such as Web Componenets and Shadow DOM.
The library is heavily inspired by [dat.GUI](https://code.google.com/p/dat-gui/).

###[Live Demo](TBD.com)

![Dark Theme](http://benraziel.github.io/parametric/screenshots/parametric-dark.png)
![Light Theme](http://benraziel.github.io/parametric/screenshots/parametric-light.png)

Features
========
+ Theme support - comes with built-in light and dark themes
+ Tab Navigation
+ Sliders
+ Toggle Buttons
+ Dropdown Menus
 
Getting Started
===============

- Copy the files under the _dist_ folder into your project.
- Include _platform.js_ as the first script in your HTML page. This script contains polyfills for polymer features which are still unsupported by browsers. Since it is quite large, it is recommended that you include it using a CDN:
```
<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.3.3/platform.js"></script>
```  
- Add a reference to the _parametric-ui_ polymer element:
```
<link rel="import" href="../dist/parametric-ui.html">
```
- Embed the _parametric-ui_ element in your HTML:
```
<parametric-ui id="parametric"></parametric-ui>
```
- To avoid flickering when the page loads, add "unresolved" next to your body tag (More information on this issue is available [here](http://www.polymer-project.org/docs/polymer/styling.html)
```
<body unresolved>
```  
- Add your controls by editing _parametric-ui.html_.
 
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
