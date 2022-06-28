// 멀티미디어 요소 로딩전 실행
$(document).ready(function () {
    // 모바일 메뉴
    let mb_div = $('.mb-div');
    // 모바일 보기 버튼 기능
    let mb_bt = $('.mb-bt');
    mb_bt.click(function () {
        mb_div.show()
    })
    // 모바일 보기 닫기 기능
    let mb_close = $('.mb-close');
    mb_close.click(function () {
        mb_div.hide()
    })
    // 배경 누르면 닫기
    mb_div.click(function () {
        mb_div.hide();
    });
    // 내용을 클릭하면 배경으로 신호를 막는다.
    $('.mb-bg').click(function (event) {
        event.stopPropagation();
    });

    // 모바일 메뉴 기능
    let mb_menu_li = $('.mb-menu>li');
    $.each(mb_menu_li, function (index, item) {
        // mb-mainmenu 를 찾아서 보관
        let temp = $(this).find('.mb-mainmenu');
        temp.click(function () {
            // 펼쳐져 있는 경우 true , 없으면 false
            let result = temp.hasClass('mb-mainmenu-open');

            if (result == true) {
                //펼쳐진 클래스 가진 경우
                temp.removeClass('mb-mainmenu-open');
                // 펼쳐진 서브메뉴 닫기
                mb_menu_li.eq(index).find('.mb-submenu').hide();
            } else {
                // 모든 클래스 일다 제거
                mb_menu_li.find('.mb-mainmenu').removeClass('mb-mainmenu-open')
                // 모든 펼쳐진 서브메뉴를 닫는다.
                mb_menu_li.find('.mb-submenu').hide();
                //펼쳐진 클래스 없는 경우
                temp.addClass('mb-mainmenu-open');
                //서브메뉴 펼치기
                mb_menu_li.eq(index).find('.mb-submenu').show()
            }
        });
    });

    //윈도우 너비 체크 
    $(window).resize(function(){
        let temp = $(window).width();
        if (temp >= 880) {
            mb_div.hide();
            $('.mb-mainmenu').removeClass('mb-mainmenu-open');
            $('.mb-submenu').hide();
        }
    });


});
// 멀티미디어 요소 로딩 완료후 실행
window.onload = function () {
    // 스크롤시 header 고정
    let header = $('.header');
    let wrap = $('.wrap');
    // 사라지는 시점 px 값
    // 배너의 높이 값
    let fixY = $('.banner').height();

    $(window).scroll(function(){
        //스크롤 바의 세로 상단 값
        let temp = $(window).scrollTop();
        if(temp > fixY) {
            header.addClass('header-fix');
            wrap.addClass('wrap-fix');
        }else {
            header.removeClass('header-fix');
            wrap.removeClass('wrap-fix');
        }
    });

    //상단 배너 닫기
    let banner_close = $('.banner-close');
    banner_close.click(function(){
        // 배너가 보여지지 않으므로 값을 제거
        fixY = 0;
        $('.banner').slideUp(300);
    });

    // 상단 배너 슬라이드
    new Swiper('.sw-banner', {
        loop: true,
        // fade 효과
        effect: 'fade',
        // pagination , click
        pagination: {
            el: ".sw-banner-pg",
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // touchMove 제거
        allowTouchMove: false,
    });

    // visual slide
    new Swiper('.sw-visual', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // pagination
        pagination: {
            el: ".sw-visual-pg",
            clickable: true,
        }
    })
};