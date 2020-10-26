$(".vod-item-playurl dd a").each(function(){
    var href = $(this).attr("href");
    href='javascript:;" onclick="window.open('https://www.69330.net/player/?url='+href,'_blank')"' + ' rel="nofollow';
    $(this).attr('href',href);
});


$(".playlist ul li a").each(function(){
    var href = $(this).attr("href");
    href='javascript:;" onclick="window.open('https://www.69330.net/player/?url='+href,'_blank')"' + ' rel="nofollow';
    $(this).attr('href',href);
});

