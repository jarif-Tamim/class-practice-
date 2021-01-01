$(document).ready(function(){
    $("h1").hide();
});
$(document).ready(function(){
    $(".rana").hide();
});
$(document).ready(function(){
    $("#apo").hide();
});
$(document).ready(function(){
    $(".nafiz").click(function(){
        $(".arif").hide("slow");
    });

    $(".tonni").click(function(){
        $(".arif").show("slow");
    });

    $(".zahid").hover(function(){
        $(this).hide("slow");
    });

});
            
        // JQurey Event
        // 1.click
        // 2.dblclick
        // 3.mousedown
        // 4.mouseleave
        // 5.mouseenter
        // 6.hover
        // 7.focus
        // 8.blur
