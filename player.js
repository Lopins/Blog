/**
 * 功能:检测域名
 * */
var host = window.location.host;
var ng = /(docnn\.cn|47\.56\.128\.71|9438\.org|b3c2\.com)$/;
if (host.search(ng) == -1) {
    window.location.href = '//www.lopins.cn/';
}

/*47.56.128.71*/
$(".vod-item-playurl dd a").each(function(){
    var href = $(this).attr("href");
    href='https://www.69330.net/player/?url='+href;
    $(this).attr('href',href);
});

/*9438.org||b3c2.com*/
$(".playlist ul li a").each(function(){
    var href = $(this).attr("href");
    href='https://www.69330.net/player/?url='+href;
    $(this).attr('href',href);
});