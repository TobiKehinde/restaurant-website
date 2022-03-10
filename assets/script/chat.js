
$(document).ready(function () {
    $(".chat_on").click(function () {
        $(".Layout").toggle();
        $(".chat_on").hide();
    });

    $(".chat_close_icon").click(function () {
        $(".Layout").hide();
        $(".chat_on").show();
    });

});