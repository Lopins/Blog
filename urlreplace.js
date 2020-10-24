$(".vod-item-playurl dd a").each(function(){
	var href = $(this).attr("href");
	href=href.replace('http','//www.69330.net/player/?url=http');
	$(this).attr('href',href);
});