$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
    });
});
$(document).ready(function(){
    $('.header-burger').click(function(event){
        $('.header-burger, .header-menu').toggleClass('active');
    });
});