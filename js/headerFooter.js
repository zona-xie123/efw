$(document).ready(function () {
    //解決點擊延遲
    FastClick.attach(document.body);

   
      //選單滾動
      var lastScrollTop;
      navbar = document.getElementById('header'); 
      window.addEventListener('scroll',function(){
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if(scrollTop <= 0){ 
              navbar.style.top='0';
         
          }else if(scrollTop > lastScrollTop){ 
              navbar.style.top='-70px';
          }else{
              navbar.style.top='0';
          }
          lastScrollTop = scrollTop; 
      });
    // if ($(window).width() > 768) {
    //     var nav_height = $('header').outerHeight();
    //     var new_top = [0, 0];
    //     $(window).scroll(function () {
    //         new_top[1] = $(window).scrollTop();
    //         if (new_top[0] - new_top[1] < 0) {
    //             new_top[0] = new_top[1];
    //             // $('#wrap').css('padding-top',nav_height);
    //             $('header').removeClass('mystyle').addClass('mystyle'); /* 幫選單加上固定效果 */

    //         }else {
    //             new_top[0] = new_top[1];
    //             $('header').removeClass('mystyle'); /* 移除選單固定效果 */
    //             $('header').css({
    //                 'top': -100,
    //                 'position': 'fixed'
    //             });
    //         }
    //     })
    // }

    //gotop        
    var gotop = $('#gotop');
    gotop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            gotop.fadeIn();
        } else {
            gotop.stop().fadeOut();
        }
    });

    //數位服務選單
    $('.function_ham').click(function () {
        $('.function_nav').toggleClass('function_nav_close')
    });
    if ($(window).width() > 800) {
        var function_nav = $('.function_nav');
        var nav_wrap = $('.nav_wrap');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                function_nav.addClass('function_nav_close')
                nav_wrap.addClass('nav_wrap_close')
            } else {
                function_nav.removeClass('function_nav_close')
                nav_wrap.removeClass('nav_wrap_close')
                $('header').css({
                    'top': 0,
                    'position': 'fixed'
                });
                $('.kv').css({
                    'margin-top': '60px'
                })
            }
        });
    }

    //m版漢堡選單
    $('#toggle').click(function (e) {
        $('.main-nav, nav.main-nav, #toggle, #header').toggleClass('on');
        e.preventDefault();
    });
    $('.main-nav ul.anchor li a').click(function () {
        $('#header,#toggle, .main-nav').removeClass('on')
    })
})

//錨點
$('.anchor a').click(function () {
//Animate
$('html, body').stop().animate({
    scrollTop: $($(this).attr('href')).offset().top - 90
}, 400);
return false;
});

