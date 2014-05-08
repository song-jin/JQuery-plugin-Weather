依赖库：jQuery


插件调用方式：
$.weather({对象参数})


对象参数有：
city:城市名（string）
day:查询天数（Number），可以查询最近五天，也就是说最大是4
success:回调函数，在函数中写代码


回调函数写法:
success:function(result) {
	//result是参数名，不用改，直接写
	
	/*
		result.image --> 今天白天天气的图片
		result.nImage --> 今天夜间天气图片

		result.day --> 今天白天天气情况
		result.night --> 今天夜间天气情况

		result.template --> 今天白天温度（摄氏度）
		result.nTemplate --> 今天夜间温度（摄氏度）

		result.wind --> 今天白天风向风力如何
		result.nWind --> 今天夜间风力风向

		从提二天开始需要在result后面加上天数，
		如第二天的调用是 result.tomorrow.查询参数（上面那些）

		第三天是 thirdDay
		第四天是 forthDay
		第五天是 fifthDay
	*/
}
