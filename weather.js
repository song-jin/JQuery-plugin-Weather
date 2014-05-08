/*
* weather
*
* A simple jQuery plugin to display the current three day weather
* information using Sina Weather.
*/
(function($) {
	$.extend({
		weather:function(options) {
			//add default value
			options = $.extend({
				city: '梅州',
				day: 0,
				success:function(result) {}
			}, options);

			//get JSONP data
			var weatherUrl = 'http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&day=' + options.day + '&city=' + options.city + '&dfc=1&charset=utf-8';
			var imgBaseUrl = 'http://php.weather.sina.com.cn/images/yb3/78_78/';

			$.getScript(weatherUrl, function() {
				var today = SWther.w[options.city][0];
				var tomo = SWther.w[options.city][1];
				var thir = SWther.w[options.city][2];
				var fort = SWther.w[options.city][3];
				var fifth = SWther.w[options.city][4];

				switch(options.day) {
					case 0:
						var result = {
							image:imgBaseUrl + today.f1 + '_0.png',
							nImage:imgBaseUrl + today.f2 + '_1.png',
							day:today.s1,
							night:today.s2,
							template:today.t1 + '℃',
							nTemplate:today.t2 + '℃',
							wind:today.d1 + today.p1 + '级',
							nWind:today.d2 + today.p2 + '级'
						};
						options.success(result);
						break;
					case 1:
						var result = {
							image:imgBaseUrl + today.f1 + '_0.png',
							nImage:imgBaseUrl + today.f2 + '_1.png',
							day:today.s1,
							night:today.s2,
							template:today.t1 + '℃',
							nTemplate:today.t2 + '℃',
							wind:today.d1 + today.p1 + '级',
							nWind:today.d2 + today.p2 + '级',

							tomorrow: {
								image:imgBaseUrl + tomo.f1 + '_0.png',
								nImage:imgBaseUrl + tomo.f2 + '_1.png',
								day:tomo.s1,
								night:tomo.s2,
								template:tomo.t1 + '℃',
								nTemplate:tomo.t2 + '℃',
								wind:tomo.d1 + tomo.p1 + '级',
								nWind:tomo.d2 + tomo.p2 + '级'
							},
						};
						options.success(result);
						break;
					case 2:
						var result = {
							image:imgBaseUrl + today.f1 + '_0.png',
							nImage:imgBaseUrl + today.f2 + '_1.png',
							day:today.s1,
							night:today.s2,
							template:today.t1 + '℃',
							nTemplate:today.t2 + '℃',
							wind:today.d1 + today.p1 + '级',
							nWind:today.d2 + today.p2 + '级',

							tomorrow: {
								image:imgBaseUrl + tomo.f1 + '_0.png',
								nImage:imgBaseUrl + tomo.f2 + '_1.png',
								day:tomo.s1,
								night:tomo.s2,
								template:tomo.t1 + '℃',
								nTemplate:tomo.t2 + '℃',
								wind:tomo.d1 + tomo.p1 + '级',
								nWind:tomo.d2 + tomo.p2 + '级'
							},

							thirdDay: {
								image:imgBaseUrl + thir.f1 + '_0.png',
								nImage:imgBaseUrl + thir.f2 + '_1.png',
								day:thir.s1,
								night:thir.s2,
								template:thir.t1 + '℃',
								nTemplate:thir.t2 + '℃',
								wind:thir.d1 + thir.p1 + '级',
								nWind:thir.d2 + thir.p2 + '级'
							}
						};
						options.success(result);
						break;
					case 3:
						var result = {
							image:imgBaseUrl + today.f1 + '_0.png',
							nImage:imgBaseUrl + today.f2 + '_1.png',
							day:today.s1,
							night:today.s2,
							template:today.t1 + '℃',
							nTemplate:today.t2 + '℃',
							wind:today.d1 + today.p1 + '级',
							nWind:today.d2 + today.p2 + '级',

							tomorrow: {
								image:imgBaseUrl + tomo.f1 + '_0.png',
								nImage:imgBaseUrl + tomo.f2 + '_1.png',
								day:tomo.s1,
								night:tomo.s2,
								template:tomo.t1 + '℃',
								nTemplate:tomo.t2 + '℃',
								wind:tomo.d1 + tomo.p1 + '级',
								nWind:tomo.d2 + tomo.p2 + '级'
							},

							thirdDay: {
								image:imgBaseUrl + thir.f1 + '_0.png',
								nImage:imgBaseUrl + thir.f2 + '_1.png',
								day:thir.s1,
								night:thir.s2,
								template:thir.t1 + '℃',
								nTemplate:thir.t2 + '℃',
								wind:thir.d1 + thir.p1 + '级',
								nWind:thir.d2 + thir.p2 + '级'
							},

							forthDay: {
								image:imgBaseUrl + fort.f1 + '_0.png',
								nImage:imgBaseUrl + fort.f2 + '_1.png',
								day:fort.s1,
								night:fort.s2,
								template:fort.t1 + '℃',
								nTemplate:fort.t2 + '℃',
								wind:fort.d1 + fort.p1 + '级',
								nWind:fort.d2 + fort.p2 + '级'
							}
						};
						options.success(result);
						break;
					case 4:
						var result = {
							image:imgBaseUrl + today.f1 + '_0.png',
							nImage:imgBaseUrl + today.f2 + '_1.png',
							day:today.s1,
							night:today.s2,
							template:today.t1 + '℃',
							nTemplate:today.t2 + '℃',
							wind:today.d1 + today.p1 + '级',
							nWind:today.d2 + today.p2 + '级',

							tomorrow: {
								image:imgBaseUrl + tomo.f1 + '_0.png',
								nImage:imgBaseUrl + tomo.f2 + '_1.png',
								day:tomo.s1,
								night:tomo.s2,
								template:tomo.t1 + '℃',
								nTemplate:tomo.t2 + '℃',
								wind:tomo.d1 + tomo.p1 + '级',
								nWind:tomo.d2 + tomo.p2 + '级'
							},

							thirdDay: {
								image:imgBaseUrl + thir.f1 + '_0.png',
								nImage:imgBaseUrl + thir.f2 + '_1.png',
								day:thir.s1,
								night:thir.s2,
								template:thir.t1 + '℃',
								nTemplate:thir.t2 + '℃',
								wind:thir.d1 + thir.p1 + '级',
								nWind:thir.d2 + thir.p2 + '级'
							},

							forthDay:{
								image:imgBaseUrl + fort.f1 + '_0.png',
								nImage:imgBaseUrl + fort.f2 + '_1.png',
								day:fort.s1,
								night:fort.s2,
								template:fort.t1 + '℃',
								nTemplate:fort.t2 + '℃',
								wind:fort.d1 + fort.p1 + '级',
								nWind:fort.d2 + fort.p2 + '级'
							},

							fifthDay:{
								image:imgBaseUrl + fifth.f1 + '_0.png',
								nImage:imgBaseUrl + fifth.f2 + '_1.png',
								day:fifth.s1,
								night:fifth.s2,
								template:fifth.t1 + '℃',
								nTemplate:fifth.t2 + '℃',
								wind:fifth.d1 + fort.p1 + '级',
								nWind:fifth.d2 + fifth.p2 + '级'
							}
						};
						options.success(result);
						break;
				};
			})

			return this;
		}
	})
})(jQuery)