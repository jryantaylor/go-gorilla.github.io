
$(".navbar a[href^='#']").on('click', function(e) {
 e.preventDefault();
 var hash = this.hash;
 $('html, body').animate({
     scrollTop: $(this.hash).offset().top -49
   }, 500, function(){
     window.location.hash = hash;
   });
});