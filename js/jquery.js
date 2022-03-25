$(document).ready(function () {
    $('.icon-mobile').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    })
})