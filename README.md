# Fade
A simple JavaScript plugin for fade-in fade-out effect with CSS 3 key frame animations. No jQuery required. A pure JavaScript solution.

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
Fade.options = {
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
Fade.callBackFunction = function(arguments){
//your function here
}
```

#Selectors

You can define the type of the selectors with ```options``` variable. Examples:

###Class selectors

```javascript
Fade.options = {
  type:'in',
  class:'my-class',
  duration:'2s'
}
```

###Tag selectors

```javascript
Fade.options = {
  type:'in',
  tag:'div',
  duration:'2s'
}
```


