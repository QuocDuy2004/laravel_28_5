let isloadIdex = 0;
$(window).on('scroll  mousemove touchstart',function(){
	try{
		if(!isloadIdex){
			isloadIdex = 1;

			(function($){
				"user strict";
				$.fn.Dqdt_CountDown = function( options ) {
					return this.each(function() {
						new  $.Dqdt_CountDown( this, options );
					});
				}
				$.Dqdt_CountDown = function( obj, options ){
					this.options = $.extend({
						autoStart			: true,
						LeadingZero:true,
						DisplayFormat:"<div><span>%%D%%</span> Days</div><div><span>%%H%%</span> Hours</div><div><span>%%M%%</span> Mins</div><div><span>%%S%%</span> Secs</div>",
						FinishMessage:"hết hạn",
						CountActive:true,
						TargetDate:null
					}, options || {} );
					if( this.options.TargetDate == null || this.options.TargetDate == '' ){
						return ;
					}
					this.timer  = null;
					this.element = obj;
					this.CountStepper = -1;
					this.CountStepper = Math.ceil(this.CountStepper);
					this.SetTimeOutPeriod = (Math.abs(this.CountStepper)-1)*1000 + 990;
					var dthen = new Date(this.options.TargetDate);
					var dnow = new Date();
					if( this.CountStepper > 0 ) {
						ddiff = new Date(dnow-dthen);
					}
					else {
						ddiff = new Date(dthen-dnow);
					}
					gsecs = Math.floor(ddiff.valueOf()/1000);
					this.CountBack(gsecs, this);
				};
				$.Dqdt_CountDown.fn =  $.Dqdt_CountDown.prototype;
				$.Dqdt_CountDown.fn.extend =  $.Dqdt_CountDown.extend = $.extend;
				$.Dqdt_CountDown.fn.extend({
					calculateDate:function( secs, num1, num2 ){
						var s = ((Math.floor(secs/num1))%num2).toString();
						if ( this.options.LeadingZero && s.length < 2) {
							s = "0" + s;
						}
						return "<b>" + s + "</b>";
					},
					CountBack:function( secs, self ){
						if (secs < 0) {
							self.element.innerHTML = '<div class="lof-labelexpired"> '+self.options.FinishMessage+"</div>";
							return;
						}
						clearInterval(self.timer);
						DisplayStr = self.options.DisplayFormat.replace(/%%D%%/g, self.calculateDate( secs,86400,365) );
						DisplayStr = DisplayStr.replace(/%%H%%/g, self.calculateDate(secs,3600,24));
						DisplayStr = DisplayStr.replace(/%%M%%/g, self.calculateDate(secs,60,60));
						DisplayStr = DisplayStr.replace(/%%S%%/g, self.calculateDate(secs,1,60));
						self.element.innerHTML = DisplayStr;
						if (self.options.CountActive) {
							self.timer = null;
							self.timer =  setTimeout( function(){
								self.CountBack((secs+self.CountStepper),self);
							},( self.SetTimeOutPeriod ) );
						}
					}
				});
				$(document).ready(function(){
					$('[data-countdown="countdown"]').each(function(index, el) {
						var $this = $(this);
						var $date = $this.data('date').split("-");
						$this.Dqdt_CountDown({
							TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],
							DisplayFormat:"<div class=\"block-timer\"><p>%%D%%Ngày</p></div><span>:</span><div class=\"block-timer\"><p>%%H%%Giờ</p></div><span class=\"mobile\">:</span><div class=\"block-timer\"><p>%%M%%Phút</p></div><span>:</span><div class=\"block-timer\"><p>%%S%%Giây</p></div>",
							FinishMessage: "Chương trình đã kết thúc, hẹn gặp lại trong thời gian sớm nhất!"
						});
					});
				});
			})(jQuery);

			var swiperbanner = new Swiper('.banner-slider', {
				slidesPerView: 3,
				spaceBetween: 20,
				autoplay: {
					delay: 4000,
				},
				loop: true,
				on: {
					init: function() {
						$(this.$el).find('img').removeAttr('data-was-processed');
						awe_lazyloadImage()
					}
				},
				preloadImages: true,
				speed: 1000,
				breakpoints: {
					300: {
						slidesPerView: 1,
					},
					500: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,

					},
					991: {
						slidesPerView: 2,

					},
					1200: {
						slidesPerView: 2,

					}
				}

			});
			var swiperTextFlash = new Swiper('.text-banner-slider', {
				autoplay: {
					delay: 0,
				},

				spaceBetween: 10,
				slidesPerView: 3,
				loop: true,
				speed: 5000,
				autoplayDisableOnInteraction:true,
				breakpoints: {
					300: {
						slidesPerView: 1,
					},
					500: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView:1,

					},
					991: {
						slidesPerView: 2,

					},
					1200: {
						slidesPerView: 3,

					}
				}

			});



			var swiperproduct1 = new Swiper('.product-swiper1', {
				slidesPerView: 4,
				loop: false,
				grabCursor: true,
				roundLengths: true,
				slideToClickedSlide: false,
				spaceBetween: 20,
				autoplay: false,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				navigation: {
					nextEl: '.section_product1 .section-next',
					prevEl: '.section_product1 .section-prev',
				},
				breakpoints: {
					300: {
						slidesPerView: 2,
						spaceBetween: 6,
					},
					450: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,

					},
					991: {
						slidesPerView: 3,

					},
					1200: {
						slidesPerView: 4,

					}
				}

			});
			var swiperproduct2 = new Swiper('.product-swiper2', {
				slidesPerView: 4,
				loop: false,
				grabCursor: true,
				roundLengths: true,
				slideToClickedSlide: false,
				spaceBetween: 20,
				autoplay: false,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				navigation: {
					nextEl: '.section_product2 .section-next',
					prevEl: '.section_product2 .section-prev',
				},
				breakpoints: {
					300: {
						slidesPerView: 2,
						spaceBetween: 6,
					},
					450: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,

					},
					991: {
						slidesPerView: 3,

					},
					1200: {
						slidesPerView: 4,

					}
				}

			});
			var swiperproduct3 = new Swiper('.product-swiper3', {
				slidesPerView: 4,
				loop: false,
				grabCursor: true,
				roundLengths: true,
				slideToClickedSlide: false,
				spaceBetween: 20,
				autoplay: false,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				navigation: {
					nextEl: '.section_product3 .section-next',
					prevEl: '.section_product3 .section-prev',
				},
				breakpoints: {
					300: {
						slidesPerView: 2,
						spaceBetween: 6,
					},
					450: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,

					},
					991: {
						slidesPerView: 3,

					},
					1200: {
						slidesPerView: 4,

					}
				}

			});
			var swiperproduct4 = new Swiper('.product-swiper4', {
				slidesPerView: 4,
				loop: false,
				grabCursor: true,
				roundLengths: true,
				slideToClickedSlide: false,
				spaceBetween: 20,
				autoplay: false,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				navigation: {
					nextEl: '.section_product4 .section-next',
					prevEl: '.section_product4 .section-prev',
				},
				breakpoints: {
					300: {
						slidesPerView: 2,
						spaceBetween: 6,
					},
					450: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,

					},
					991: {
						slidesPerView: 3,

					},
					1200: {
						slidesPerView: 4,

					}
				}

			});
			var swiperflash = new Swiper('.product-flash-swiper', {
				slidesPerView: 3,
				loop: false,
				grabCursor: true,
				roundLengths: true,
				slideToClickedSlide: false,
				spaceBetween: 20,
				autoplay: false,
				navigation: {
					nextEl: '.section_flashsale .section-next',
					prevEl: '.section_flashsale .section-prev',
				},
				breakpoints: {
					300: {
						slidesPerView: 2,
						spaceBetween: 6,
					},
					450: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20
					},
					991: {
						slidesPerView: 4,
						spaceBetween: 20
					},
					1200: {
						slidesPerView: 5,
						spaceBetween: 20
					}
				}
			});
			var swiperchinhsach = new Swiper('.chinhsach-swiper', {
				slidesPerView: 3,
				loop: false,
				grabCursor: true,
				spaceBetween: 30,
				roundLengths: true,
				slideToClickedSlide: false,
				navigation: {
					nextEl: '.chinhsach-swiper .swiper-button-next',
					prevEl: '.chinhsach-swiper .swiper-button-prev',
				},
				autoplay: false,
				breakpoints: {
					300: {
						slidesPerView: 1.4,
						spaceBetween: 10
					},
					500: {
						slidesPerView: 1.4,
						spaceBetween: 10
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					768: {
						slidesPerView: 2.5,
						spaceBetween: 30
					},
					991: {
						slidesPerView: 3.5,
						spaceBetween: 30
					},
					1200: {
						slidesPerView: 4,
						spaceBetween: 30
					}
				}
			});
			var swiperwish = new Swiper('.brand-swiper', {
				slidesPerView: 5,
				loop: false,
				grabCursor: true,
				spaceBetween: 20,
				roundLengths: true,
				slideToClickedSlide: false,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				navigation: {
					nextEl: '.brand-swiper .swiper-button-next',
					prevEl: '.brand-swiper .swiper-button-prev',
				},
				autoplay: false,
				breakpoints: {
					300: {
						slidesPerView: 2,
						spaceBetween: 30
					},
					500: {
						slidesPerView: 2,
						spaceBetween: 30
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 30
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 30
					},
					991: {
						slidesPerView: 5,
						spaceBetween: 30
					},
					1200: {
						slidesPerView: 6,
						spaceBetween: 30
					}
				}
			});
			$(".not-dqtab").each( function(e){
				var $this1 = $(this);
				var datasection = $this1.closest('.not-dqtab').attr('data-section');
				$this1.find('.tabs-title li:first-child').addClass('current');
				var view = $this1.closest('.not-dqtab').attr('data-view');
				$this1.find('.tab-content').first().addClass('current');
				var droptab = $(this).find('.tab-desktop');
				$this1.find('.tabs-title.ajax li').click(function(){
					var $this2 = $(this),
						tab_id = $this2.attr('data-tab'),
						url = $this2.attr('data-url');
					var etabs = $this2.closest('.e-tabs');
					etabs.find('.tab-viewall').attr('href',url);
					etabs.find('.tabs-title li').removeClass('current');
					etabs.find('.tab-content').removeClass('current');
					$this2.addClass('current');
					etabs.find("."+tab_id).addClass('current');
					if(!$this2.hasClass('has-content')){
						$this2.addClass('has-content');		
						getContentTab(url,"."+ datasection+" ."+tab_id,view);
					}
				});
			});


			function getContentTab(url,selector){

				url = url+"?view=ajaxload4";

				var loading = '<div style="width: 100%; margin-top: 20px" class="text-center">Đang tải dữ liệu...</div>';
				var fill = $(selector);
				console.log(url)
				$.ajax({
					type: 'GET',
					url: url,
					beforeSend: function() {
						$(selector).html(loading);
					},
					success: function(data) {
						var content = $(data);
						setTimeout(function(){
							$(selector).html(content.html());

							awe_lazyloadImage();

							$(selector+' .add_to_cart').click(function(e){	
								e.preventDefault();		
								var $this = $(this);
								var form = $this.parents('form');	
								$.ajax({
									type: 'POST',
									url: '/cart/add.js',
									async: false,
									data: form.serialize(),
									dataType: 'json',
									beforeSend: function() { },
									success: function(line_item) {
										$('.cart-popup-name').html(line_item.title).attr('href', line_item.url, 'title', line_item.title);
										ajaxCart.load();

										$('.popup-cart-mobile, .backdrop__body-backdrop___1rvky').addClass('active');
										AddCartMobile(line_item);

									},
									cache: false
								});
							});
							$(document).ready(function () {
								var modal = $('.quickview-product');
								var btn = $('.quick-view');
								var span = $('.quickview-close');

								btn.click(function () {
									modal.show();
								});

								span.click(function () {
									modal.hide();
								});

								$(window).on('click', function (e) {
									if ($(e.target).is('.modal')) {
										modal.hide();
									}
								});
							});

						},300);

					},
					error: function(err){
						$(selector).html('<div style="margin-top: 20px" class="alert alert-warning alert-warning2 alert-dismissible margin-top-15 section" role="alert">		Sản phẩm đang được cập nhật.	</div>');
					},
					dataType: "html"
				});
			};
		}
	}catch(e){
		console.log(e);
	}
});