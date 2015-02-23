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

## Basic usage
```html
<div id="box-container1" data-box-columns="3" data-box-rows="2">
    <div class="box" data-box-top="0" data-box-left="0" data-box-width="2" data-box-height="2">
        <p>Sample content on 2x2 box</p>
    </div>
    <div class="box" data-box-top="0" data-box-left="2" data-box-width="1" data-box-height="2"
        data-box-background="red">
        <p>Sample content on a 1x2 box</p>
    </div>
    <div class="box" data-box-top="2" data-box-left="1" data-box-width="2" data-box-height="1"
         data-box-background-image="url('img/1.jpg')" data-box-background-size="cover"
         data-box-background-position="center">
        <p>Sample content hover an image</p>
    </div>
</div>

.......

<script type="application/javascript">
    $("#box-container1").box();
</script>

```

See a more complex example on the demo directory of the repository.

## Options

### Box container

* columns: indicates the container width (a value M means "M columns");
* rows: indicates the container height (a value N means "N columns");
* containerBackground: set the container background (refers to CSS "background:" tag.);
* boxesBackground: indicates the boxes background if no background property is set to the box element (refers to CSS "background:" tag.);
* boxesPadding: indicates the padding of the internal boxes;
* boxesClass: indicates an additional class set to ALL BOXES that can be set to customize the box content;
* boxesSpacing: indicates the spaces beetween boxes in pixel;
* containerPadding: indicates the padding beetween borders and internal boxes;
