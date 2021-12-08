$(document).ready(function() {
	if ($('.icon-up').length > 0) {
        var e = $(window).scrollTop();
            $(".back-top").show();
        
    }
    $('.icon-up').click(function() {
        $("body,html").animate({
            scrollTop: 0
        },0)
    });
    $('.shirt-category').hide()
    $('.btn-show-item-category').click(function(event) {
    	/* Act on the event */
    	$( ".shirt-category" ).slideToggle(500);
    	$(this).children().toggleClass('fa-chevron-right fa-chevron-down');

    });
    $('.cate-list ul').hide();
    $('.banner-slide').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow:'<button class="arrow-slick1 prev-slick1 slick-arrow"><i class="fas fa-caret-left"></i>',
            nextArrow:'<button class="arrow-slick1 next-slick1 slick-arrow"><i class="fas fa-caret-right"></i>',

        });
		$('.product-list').slick({
		  dots: true,
		  infinite:true,
		  speed: 600,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  autoplay: true,
          autoplaySpeed: 1000,
          pauseOnFocus: false,
          pauseOnHover: false,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});	 
	AOS.init();
	 $('.js-hide-modal1').click(function(event) {
    	/* Act on the event */
    	$('.wrap-modal1').removeClass('show-modal1');
    });
});
function slidelist(obj)
{
	var id=$(obj).attr('id');
	$('.item-list-'+id).slideToggle(200);
	$(obj).children().toggleClass('fa-plus fa-minus');
}
function slidelistchild(obj)
{
	var id=$(obj).attr('id');
	$('.ca-'+id).slideToggle(200);
	$(obj).children().toggleClass('fa-plus fa-minus');
}
function ChangePicture(obj) {
	src = $(obj).attr('src')
	$('.main-image').attr('src', 'src');	
}
