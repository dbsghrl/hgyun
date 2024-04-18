$(document).ready(function(){
    $("ul.sub").hide();
    $("ul.menu>li").mouseover(function(){
        $(this).children("ul.sub").stop().fadeIn(0.1);
    });
    $("ul.menu>li").mouseout(function(){
        $(this).children("ul.sub").stop().fadeOut(0.1);
    });



    $(".baro>.img1>a>img").click(function(){
        $(".modal1").show();
    });
    $("button").click(function(){
        $(".modal1").hide();
    });

    $(".baro>.img3>a>img").click(function(){
        $(".modal3").show();
    });
    $("button").click(function(){
        $(".modal3").hide();
    });

    $(".baro>.img4>a>img").click(function(){
        $(".modal4").show();
    });
    $("button").click(function(){
        $(".modal4").hide();
    });

    $(".baro>.img5>a>img").click(function(){
        $(".modal5").show();
    });
    $("button").click(function(){
        $(".modal5").hide();
    });

    $(".modal1").hide();
    $(".modal3").hide();
    $(".modal4").hide();
    $(".modal5").hide();
});