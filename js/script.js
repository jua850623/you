$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
        $("#nav_back").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp(600);
        $("#nav_back").stop().slideUp(600);
    }

);


$(".open").click(
    function(){
        $("#popup").show();
    }
);
$(".close").click(
    function(){
        $("#popup").hide();
    }
);