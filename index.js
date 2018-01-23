var index = 0;
$("button").click(function() {
    if ($("button").html() === "next") {
        if (index === 3) {
            index = 0;
            $(".preparing").removeClass("preparing");
            $(".success").removeClass("success");
            $("button").html("restart");
        } else {
            $(".step:eq(" + index + ")").find(".circle").addClass("success").end().find(".line").addClass("success");
            $(".step:eq(" + (index + 1) + ")").find(".circle").addClass("preparing").end().find(".line").addClass("preparing");
            index++;
        }
    } else {
        $(".step:eq(" + index + ")").find(".circle").addClass("preparing").end().find(".line").addClass("preparing");
        $("button").html("next");
    }
})