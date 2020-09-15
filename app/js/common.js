$('[name=phone]').mask("+7 (999) 999-99-99");

$("[name=file]").change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $(".file__upload_result").html(filename);
});

$('.btn-burger').click(function () {
    $('.mobile-menu').slideDown();
});

$('.menu-close').click(function () {
    $('.mobile-menu').slideUp();
});