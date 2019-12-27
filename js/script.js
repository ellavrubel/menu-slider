$(document).ready(function () {
     $('.menu__btn').click(function (e) {
         e.preventDefault();
        $('.menu').toggleClass('menu__active');
        $('.content').toggleClass('content__active');
     });
});