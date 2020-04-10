window.onload = function () {
    head();
    this.loopScroll();
}
// 颜色渐变
function head() {
    var header = document.getElementsByClassName("header")[0];
    var banner = document.getElementsByClassName('loop')[0];
    var height = banner.offsetHeight;
    window.onscroll = function () {
        var topHeight = document.documentElement.scrollTop;
        if (topHeight > height) {
            header.style.background = "rgba(218, 217, 215,0.7)";
        }
        else {
            var opacty = top / this.height * 0.7;
            header.style.background = "rgba(218,217,215,'+opacty+')";
        }
    }
}
// 轮播图
function loopScroll() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
// 滚动条
$(function () {
    function resize() {
        var $ulContainer = $('.nav-tabs');
        var width = 0;
        $ulContainer.children().each(function (index, element) {
            width += element.clientWidth;
        })
        if (width > $(window).width()) {
            $ulContainer.css('width', width).parent().css('overflow-x', 'scroll');
        }
        else {
            $ulContainer.css('width', width).parent().css('overflow-x', 'hidden');
        }
    }
    $(window).on('resize', resize).trigger('resize');
})

