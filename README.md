# box.js

Box.js is a jQuery cross-browser extension to create cool box wrapper using "absolute logic" based on top-left-width-height.

The libray is almost customizable and easy to integate: don't require additional css files, only a javascript file!

Please see Documentation section for more information.


# Requirement

* jQuery script, inserted in a tag BEFORE jquery.box.js script;
* box-container refers to parent width and height, be sure that parent size is defined.

# Documentation

Box.js models the container space as an absolute space having M:N aspect ratio:
* M is defined in the columns attribute,
* N is defined in the rows attribute.
 
Each internal box can be placed in the container using top and left attributes for the position and width and height attributes for the box size.

Top, Left, Width and Height attributes are float and 0 based:
* Top, Height are in [0;N),
* Left, Width are in [0;M).

For the container you can can set parameter values using DOM attibutes or passing them to the .box() initialization.

I.E. if the parameter you want to set is "container backgound", you can set it directly on DOM element using dash-syntax-notation attribute with "data-box-" prefix...

```html
<div id="box-container1" ... data-box-container-background="red">
```

...or you can set it via javascript using camelCaseNotation

```javascript
$("#box-container1").box(
    containerBackground: "red"
);
```

## Options

To complete.
