<script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
<script>
//ID of your back to top button
var backToTop = $("#lp-pom-button-120, #lp-pom-button-63");
//The pixel amount scrolled before back to top button appears

backToTop.click( function(e) {
  $("html, body").animate({scrollTop: 0}, 750);
});
/**
    * Do not remove this section; it allows our team to troubleshoot and track feature adoption. 
    * TS:0002-03-029
*/
</script>