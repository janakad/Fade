# Fade
A simple JavaScript plugin for fade-in fade-out effect with CSS 3 key frame animations.

#Installation

Download and unpack the plugin.

Then add javascript and the css:

```html

<link href="Fade/css/fade.css">

<script src="Fade/js/fade.js"></script>

```

#Usage

First set options for fade function by:

```javascript
Fade.options={
  type:'in',
  id:'my-div',
  duration:'2s'
}
```

Then start the animation!

```javascript
Fade.start();
```

#Callbacks:

```javascript
Fade.callBackFunction=function(arguments){
//your function here
}
```
