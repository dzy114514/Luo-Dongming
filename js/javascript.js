$(document).ready(function(e) {

	// 轮播插件
	var mySwiper = new Swiper('.swiper-container',{
	    loop: true,
		autoplay: 3000,
		pagination: '.swiper-pagination',			
	});

	// 导航条功能
	var menu = document.getElementById('menu');
	var nav = menu.getElementsByTagName('a');
	// 导航条相对于网页原点的位置
	var navPos = $('#menu').offset().top;

	// 导航条点击事件
	for (var i = 1; i < nav.length; i++) {
		(function(i) {
			nav[i].onclick = function(event) {
				if(i == 1) {
					$('html,body').animate({scrollTop:0}, 1000);
				} else if(i == 2) {
					$('html,body').animate({scrollTop:$('#aboutMe').offset().top - 62 + 'px'}, 1000);
				} else if(i == 3) {
					$('html,body').animate({scrollTop:$('#technical').offset().top - 62 + 'px'}, 1000);
				} else if(i == 4) {
					$('html,body').animate({scrollTop:$('#education').offset().top - 62 + 'px'}, 1000);
				} else if(i == 5) {
					$('html,body').animate({scrollTop:$('#protfolio').offset().top - 62 + 'px'}, 1000);
				} else if(i == 6) {
					$('html,body').animate({scrollTop:$('#contact').offset().top - 62 + 'px'}, 1000);
				}
			};
		})(i);
	};

	// 导航条浮动事件
	$(window).scroll(function(event) {
		// 滚动条高度
		var sTop = $(window).scrollTop();
		if(sTop >= navPos) {
			$('#menu').addClass('pos');
		} else {
			$('#menu').removeClass('pos');
		}
	});

	// 滚动条事件
	$(window).scroll(function(event) {
		// 滚动条高度
		var sTop = $(window).scrollTop();
		if(sTop < ($('#aboutMe').offset().top - 63)) {
			$(nav).removeClass('active');
			$(nav).eq(1).addClass('active');
		} else if(((sTop < $('#technical').offset().top - 63)) && (sTop >= ($('#aboutMe').offset().top - 63))) {
			$(nav).removeClass('active');
			$(nav).eq(2).addClass('active');
		} else if(((sTop < $('#education').offset().top - 63)) && (sTop >= ($('#technical').offset().top - 63))) {
			$(nav).removeClass('active');
			$(nav).eq(3).addClass('active');
		} else if(((sTop < $('#protfolio').offset().top - 63)) && (sTop >= ($('#education').offset().top - 63))) {
			$(nav).removeClass('active');
			$(nav).eq(4).addClass('active');
		} else if(((sTop < $('#contact').offset().top - 63)) && (sTop >= ($('#protfolio').offset().top - 63))) {
			$(nav).removeClass('active');
			$(nav).eq(5).addClass('active');
		} else {
			$(nav).removeClass('active');
			$(nav).eq(6).addClass('active');
		}
	});

	// 点赞按钮
	$('#btn1').click(function(event) {
		var text = parseInt($('#btn1 .badge').text());
		$('#btn1 .badge').text(text + 1000);
		$('#btn1').removeClass('btn-black');
		$('#btn1').addClass('btn-danger');
	});

	// 技能触发
	var index = 0;
	$(document).scroll(function(){
		var top = $('.technical').height() - $(window).scrollTop();
		if(top < -300){
			if(index == 0){	
				// 圆圈样式(easyPieChart)
				$('.chart').easyPieChart({
					// 运动动画
					easing: 'easeOutBounce',
					// 圈里文字也改变
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
				
			}
			index++;
		}
	});

	// 作品区动画
	$(window).load(function(){
	    var $container = $('.portfolioContainer');
	    $container.isotope({
	        filter: '*',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear',
	            queue: false
	        }
	    });
	 
	    $('.portfolioFilter a').click(function(){
	        $('.portfolioFilter .current').removeClass('current');
	        $(this).addClass('current');
	 
	        var selector = $(this).attr('data-filter');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    }); 
	});

	jQuery(function($) {
		var $chosenSheet,
		$stylesheets = $( "a[id^=theme-]" );
		
		// run rlightbox
		$( ".lb" ).rlightbox();
		$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
	});


});