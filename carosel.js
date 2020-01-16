//<script>

/*
Unbounce Community :: Tips & Scripts :: Carousel With A Box Widget 
TS:0002-04-063
***********************
Do not remove this section. It helps our team track useage of external workarounds.
*/
  // jQuery v 2.2.4 requierd
  // CDN link here - https://code.jquery.com/
  // Add a box to the page and nest the elements inside (can include boxes with grouped content)
  // The first element that is nested in the containing box will be what shows on page load

$(function() { 
  // Add a box to the page and nest the elements inside (can include boxes with grouped content)
  // The first element that is nested in the containing box will be what shows on page load
  // Add ID of box containing elements. 
  var container = $("#lp-pom-box-534"); 
  
  // Add ID of right button
  var right = $("#lp-pom-button-242");
  
  // Add ID of left button
  var left = $("#lp-pom-button-244");
  
  var time = 500; 
  
  // code to select and centre elements 
  container.children().css({
                        'top': '50%',
                        'left': '50%',
                        'transform': 'translate(-50%, -50%)'
                           });
  var allEls = container.children().not(":eq(0)");
  var notFirst = allEls.not(":eq(0)");
  notFirst.css('display', 'none');
     
  // Functions to cycle through the elements in the containing box and show/hide them  
  function cycleRight(el, delay) {
    $(el[0]).fadeIn(500)
	    .delay(delay)
	    .fadeOut(500)
	    .promise()
	    .done(function() {
          $(el[1]).fadeIn(500);
	      var putBack = el.splice(0, 1);
	      allEls.push(putBack[0]);	             
	    });
    }
  
  function cycleLeft(el, delay) {
    $(el[0]).fadeIn(500)
	    .delay(delay)
	    .fadeOut(500)
	    .promise()
	    .done(function() {
          $(el.last()).fadeIn(500);
          var putBack = el.splice(-1, 1);
	      allEls.splice(0, 0, putBack[0]);
	    });
    }
  
  function cycleTimeRight() {
    cycleRight(allEls, time);
    $(right).off('click');
    setTimeout(function() {
      $(right).on('click', cycleTimeRight);
    }, time*3); 
  }
  
  function cycleTimeLeft() {
    cycleLeft(allEls, time);
    $(left).off('click');
    setTimeout(function() {
      $(left).on('click', cycleTimeLeft);
    }, time*3); 
  }
  
  $(right).click(function() {
    cycleTimeRight(); 
  });
  
  $(left).click(function() {
    cycleTimeLeft();
  });
});

// </script>