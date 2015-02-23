(function( $ ) {
 
    $.fn.box = function(args) {
 
			(function($) {
				$.fn.getAttributes = function() {
					var attributes = {}; 

					if(this.length) {
						$.each(this[0].attributes, function(index, attr) {
							attributes[ attr.name ] = attr.value;
						}); 
					}

					return attributes;
				};
			})(jQuery);


			if (typeof String.prototype.startsWith != 'function') {
			  String.prototype.startsWith = function (str){
			    return this.slice(0, str.length) == str;
			  };
			}

			function getRandomColor() {
			    var letters = '0123456789ABCDEF'.split('');
			    var color = '#';
			    for (var i = 0; i < 6; i++ ) {
			        color += letters[Math.floor(Math.random() * 16)];
			    }
			    return color;
			}

       		function splitOnce(str, delimiter)
       		{
       			var n = str.indexOf(delimiter);
       			if(n != -1)
       			{
       				return [str.substr(0,n), str.substr(n+1)];
       			}
       			return [str];
       		}

       		var boxContainer = $(this);
       		var boxContainerParent = boxContainer.parent();

      		boxContainer.css({
      			'position': 'relative',
      			'-webkit-box-sizing': 'border-box',
      			'-moz-box-sizing': 'border-box',
      			'-o-box-sizing': 'border-box',
      			'box-sizing': 'border-box'
      		});

       		var boxContainerColumns = args.columns || boxContainer.attr('data-box-columns');
       		var boxContainerRows = args.rows || boxContainer.attr('data-box-rows');

       		var containerBackground = args.containerBackground || boxContainer.attr('data-box-container-background');
       		var boxesBackground = args.boxesBackground || boxContainer.attr('data-box-boxes-background');
       		var boxesPadding = args.boxesPadding || boxContainer.attr('data-box-boxes-padding');

   			var boxesClass = args.boxesClass || boxContainer.attr('data-box-boxes-class') || '';

   			var boxesSpacing = args.boxesSpacing || boxContainer.attr('data-box-boxes-spacing') || 0;
   			var boxContainerPadding = args.containerPadding || (boxContainer.attr('data-box-container-padding')-(boxesSpacing/2)) || 0;


       		var containerWidth = Math.min(boxContainerParent.width(), boxContainerParent.height()) * (boxContainerColumns/boxContainerRows);
       		var containerHeight = Math.min(boxContainerParent.width(), boxContainerParent.height()); 


      		boxContainer.css('background', containerBackground);

			$(window).resize(function () {
				containerWidth = Math.min(boxContainerParent.width(), boxContainerParent.height()) * (boxContainerColumns/boxContainerRows);
				containerHeight = Math.min(boxContainerParent.width(), boxContainerParent.height()); 

				setBoxContainerSize(containerWidth, containerHeight, boxContainerPadding, boxesSpacing);

				

			});


			var boxes = boxContainer.find('.box');

       		boxes.each(function() {
   				var theBox = $(this);
      			theBox.html('<div class="box-content">'+theBox.html()+'</div>')
      		});

   			function setBoxContainerSize(width, height, boxContainerPadding, boxesSpacing)
			{

				var boxContainerWidth = width;
				var boxContainerHeight = height;

	       		boxContainerWidth -= 2*boxContainerPadding;
	       		boxContainerHeight -= 2*boxContainerPadding;

	       		boxContainer.css('padding', boxContainerPadding);

	       		var boxWidth = boxContainerWidth/boxContainerColumns;
	       		var boxHeight = boxContainerHeight/boxContainerRows;

	       		boxContainer.width(boxContainerWidth);
	       		boxContainer.height(boxContainerHeight);

	       		var boxes = boxContainer.find('.box');

	       		boxes.each(function() {
	       			var theBox = $(this);

	       			//theBox.css('background', getRandomColor());
	       			theBox.css({
	       				'top': theBox.attr('data-box-top')*boxHeight + boxContainerPadding,
	       				'left': theBox.attr('data-box-left')*boxWidth + boxContainerPadding,
	       				'width': theBox.attr('data-box-width')*boxWidth,
	       				'height': theBox.attr('data-box-height')*boxHeight,
	       				'padding': boxesSpacing/2,
	       				'position': 'absolute',
		      			'-webkit-box-sizing': 'border-box',
		      			'-moz-box-sizing': 'border-box',
		      			'-o-box-sizing': 'border-box',
		      			'box-sizing': 'border-box'
	       			});

			  		var theBoxContent = theBox.find("> .box-content");
					theBoxContent.css({
						'padding': boxesPadding,
						'width': theBox.width(),
						'height': theBox.height(),
						'float': 'left',
						'overflow': 'hidden',
						'background': boxesBackground,
		      			'-webkit-box-sizing': 'border-box',
		      			'-moz-box-sizing': 'border-box',
		      			'-o-box-sizing': 'border-box',
		      			'box-sizing': 'border-box'
					});

					theBoxContent.addClass(boxesClass);
					theBoxContent.addClass(theBox.attr('data-box-class') || '');

					var attributesOfTheBox = theBox.getAttributes();

					$.each(attributesOfTheBox, function( key, value ) {

				  		if(key.startsWith("data-box-background"))
				  		{
		     				theBoxContent.css("-webkit-" + key.substr(9), value);
		     				theBoxContent.css("-moz-" + key.substr(9), value);
		     				theBoxContent.css("-o-" + key.substr(9), value);
		     				theBoxContent.css(key.substr(9), value);
				  		}
					});

	      		});

			    if(args.success)
			    	args.success();

			}

			setBoxContainerSize(containerWidth, containerHeight, boxContainerPadding, boxesSpacing);
 
        return this;
 
    };
 
}( jQuery ));



