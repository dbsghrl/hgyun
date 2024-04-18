$(document).ready(function(){
    $("ul.sub").hide();
    $(".modal1").hide();
    $(".modal2").hide();
    $(".modal3").hide();
    $(".modal4").hide();
    $(".modal5").hide();
    $(".modal6").hide();
    $(".modal7").hide();
    $(".modal8").hide();
    $(".modal9").hide();
    $(".modal10").hide();
    $(".modal11").hide();
    $(".modal12").hide();
    $(".modal13").hide();
    $(".modal14").hide();
    $(".modal15").hide();
    $(".modal16").hide();
    $(".modal17").hide();
    $(".modal18").hide();
    $(".modal19").hide();
    $(".modal20").hide();
    $(".modal21").hide();
    $(".modal22").hide();
    $(".modal23").hide();
    $(".modal24").hide();
    $(".modal25").hide();
    
    $("ul.menu>li").mouseover(function(){
        $(this).children("ul.sub").stop().fadeIn(0.1);
        $(this).children().css({"color":"blue"});
    });
    $("ul.menu>li").mouseout(function(){
        $(this).children("ul.sub").stop().fadeOut(0.1);
        $(this).children().css({"color":"#333"});
    });

    $("ul.sub>li").mouseover(function(){
        $(this).children().css({"color":"#4C86E0"});
    });
    $("ul.sub>li").mouseout(function(){
        $(this).children().css({"color":"#333"});
    });

    $(".baro1").hide();
    $(".baro2").hide();
    $(".baro3").hide();
    $(".baro4").hide();

    $("ul.menu>li:nth-child(2)").click(function(){
        $("ul.chair").show();
        $("ul.img").hide();
        $(".baro1").show();
        $(".baro").hide();
        $(".baro2").hide();
        $(".baro3").hide();
        $(".baro4").hide();
    });
    $("ul.menu>li:nth-child(3)").click(function(){
        $("ul.bed").show();
        $("ul.chair").hide();
        $("ul.img").hide();
        $(".baro2").show();
        $(".baro").hide();
        $(".baro1").hide();
        $(".baro3").hide();
        $(".baro4").hide();
    });
    $("ul.menu>li:nth-child(4)").click(function(){
        $("ul.sofa").show();
        $("ul.chair").hide();
        $("ul.img").hide();
        $("ul.bed").hide();
        $(".baro3").show();
        $(".baro").hide();
        $(".baro1").hide();
        $(".baro2").hide();
        $(".baro4").hide();
    });
    $("ul.menu>li:nth-child(5)").click(function(){
        $("ul.pillow").show();
        $("ul.chair").hide();
        $("ul.img").hide();
        $("ul.sofa").hide();
        $("ul.bed").hide();
        $(".baro4").show();
        $(".baro").hide();
        $(".baro1").hide();
        $(".baro2").hide();
        $(".baro3").hide();
    });
    $(".logo>a>img").click(function(){
        $("ul.img").show();
        $(".baro").show();
        $("ul.pillow").hide();
        $("ul.chair").hide();
        $("ul.sofa").hide();
        $("ul.bed").hide();
        $(".baro4").hide();
        $(".baro1").hide();
        $(".baro2").hide();
        $(".baro3").hide();
    });

    $(".baro>.img1>a>img").click(function(){
        $(".modal1").show();
    });
    $("button").click(function(){
        $(".modal1").hide();
    });

    $(".baro>.img2>a>img").click(function(){
        $(".modal2").show();
    });
    $("button").click(function(){
        $(".modal2").hide();
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


    $(".baro1>.img1>a>img").click(function(){
        $(".modal6").show();
    });
    $("button").click(function(){
        $(".modal6").hide();
    });

    $(".baro1>.img2>a>img").click(function(){
        $(".modal7").show();
    });
    $("button").click(function(){
        $(".modal7").hide();
    });

    $(".baro1>.img3>a>img").click(function(){
        $(".modal8").show();
    });
    $("button").click(function(){
        $(".modal8").hide();
    });

    $(".baro1>.img4>a>img").click(function(){
        $(".modal9").show();
    });
    $("button").click(function(){
        $(".modal9").hide();
    });

    $(".baro1>.img5>a>img").click(function(){
        $(".modal10").show();
    });
    $("button").click(function(){
        $(".modal10").hide();
    });


    $(".baro2>.img1>a>img").click(function(){
        $(".modal11").show();
    });
    $("button").click(function(){
        $(".modal11").hide();
    });

    $(".baro2>.img2>a>img").click(function(){
        $(".modal12").show();
    });
    $("button").click(function(){
        $(".modal12").hide();
    });

    $(".baro2>.img3>a>img").click(function(){
        $(".modal13").show();
    });
    $("button").click(function(){
        $(".modal13").hide();
    });

    $(".baro2>.img4>a>img").click(function(){
        $(".modal14").show();
    });
    $("button").click(function(){
        $(".modal14").hide();
    });

    $(".baro2>.img5>a>img").click(function(){
        $(".modal15").show();
    });
    $("button").click(function(){
        $(".modal15").hide();
    });

    $(".baro3>.img1>a>img").click(function(){
        $(".modal16").show();
    });
    $("button").click(function(){
        $(".modal16").hide();
    });

    $(".baro3>.img2>a>img").click(function(){
        $(".modal17").show();
    });
    $("button").click(function(){
        $(".modal17").hide();
    });

    $(".baro3>.img3>a>img").click(function(){
        $(".modal18").show();
    });
    $("button").click(function(){
        $(".modal18").hide();
    });

    $(".baro3>.img4>a>img").click(function(){
        $(".modal19").show();
    });
    $("button").click(function(){
        $(".modal19").hide();
    });

    $(".baro3>.img5>a>img").click(function(){
        $(".modal20").show();
    });
    $("button").click(function(){
        $(".modal20").hide();
    });

    
    $(".baro4>.img1>a>img").click(function(){
        $(".modal21").show();
    });
    $("button").click(function(){
        $(".modal21").hide();
    });

    $(".baro4>.img2>a>img").click(function(){
        $(".modal22").show();
    });
    $("button").click(function(){
        $(".modal22").hide();
    });

    $(".baro4>.img3>a>img").click(function(){
        $(".modal23").show();
    });
    $("button").click(function(){
        $(".modal23").hide();
    });

    $(".baro4>.img4>a>img").click(function(){
        $(".modal24").show();
    });
    $("button").click(function(){
        $(".modal24").hide();
    });

    $(".baro4>.img5>a>img").click(function(){
        $(".modal25").show();
    });
    $("button").click(function(){
        $(".modal25").hide();
    });
});