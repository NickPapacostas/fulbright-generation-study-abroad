jQuery(document).ready(function() {
  jQuery('.scroll-to').click(function(event) {
    event.preventDefault();
    var targetArray = event.target.href.split('/');
    var targetId = targetArray[targetArray.length - 1]
    jQuery('html, body').animate({
      scrollTop: jQuery(targetId).offset().top
    }, 1000);
  })
});

