$(function () {

    var slick_item_count = Math.floor($('.js-header_nav').innerWidth() / 91);
    $('.js-header_nav').slick({
        dots: false,
        infinite: false,
        slidesToShow: slick_item_count,
        autoplay: false,
        arrows: true,
        speed: 100
    });
	
	$(document).on('click', '.js-to_top', function (e) {
		e.preventDefault();
		$("html,body").animate({scrollTop:0}, 800);
	});
    
	$('.js-product_images').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	});
	if($('.js-product_images__nav .item').length > 3) {
		  $('.js-product_images').slick('slickSetOption', 'asNavFor', '.js-product_images__nav', true);
		  $('.js-product_images__nav').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  asNavFor: '.js-product_images',
			  dots: false,
			  centerMode: false,
			  infinite: true,
			  focusOnSelect: true,
		  });
	}
	$('.js-product_images__nav .item').on('click',function(){
		var index = $(this).index();
		$('.js-product_images').slick("slickGoTo", index, false);
		$('.js-product_images__nav .item').removeClass('is-active');
		$('.js-product_images__nav .item').eq(index).addClass('is-active');
	});
  
	$('.js-product_images__nav .item').eq(0).addClass('is-active');
	  $('.js-product_images').on('afterChange', function(event, slick, currentSlide){
		$('.js-product_images__nav .item').removeClass('is-active');
		//console.log(currentSlide);
		$('.js-product_images__nav .item').eq(currentSlide).addClass('is-active');
		var subtitle = $('.js-product_images__nav .item').eq(currentSlide).data('subtitle');
		$('.p-single small').text(subtitle);
	});
});