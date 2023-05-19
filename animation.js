// $(document).ready(function () {
//     // alert("ready!");
//     $('#navbar').css("display", "none");
//     $('#imgCard').addClass("img-card-animi");
//     $('#navbar').fadeIn(3000);
//     $('#imgCard h1, #imgCard p').addClass("img-card-content-animi");
//     $('#imgCard button').addClass("img-card-content-btn-animi");
//     // $('.middle-top-sec').eq(0).addClass("middle-sec-icon-animi");
//     // $('.middle-top-sec').eq(1).addClass("middle-sec-icon-animi");
//     // $('.middle-content-sec').eq(0).addClass("middle-sec-content-animi");
//     // $('.current-feature').eq(0).addClass("current-feature-animi");
//     // $('.bottom-white-card').eq(0).addClass("bottom-white-card-left-animi");
//     // $('.bottom-white-card').eq(1).addClass("bottom-white-card-left-animi");
//     // // $('.bottom-middle-card:first-child').eq(0).addClass("bottom-white-card-left-animi");
//     // // $('.bottom-middle-card > div ~ div').eq(0).addClass("bottom-white-card-right-animi");
//     // $('.bottom-middle-card > div').css("display", "none");
//     // $('.bottom-middle-card > div').fadeIn(5000);
//     // // $('#img-card').fadeIn(3000)
//     // navbar();
//     // imgCard();
// });

// let navbar = () => $(window).scroll(function () {
//     var element = $('#navbar');
//     var position = element.offset().top;
//     var windowHeight = $(window).height();
//     if (position < $(window).scrollTop() + windowHeight) {
//         element.css("display", "none");
//         element.fadeIn(1000);
//     }
// });

// let imgCard = () => $(window).scroll(function () {
//     var element = $('#imgCard');
//     var position = element.offset().top;
//     var windowHeight = $(window).height();
//     if (position < ($(window).scrollTop() + windowHeight)/1.5) {
//         element.toggleClass("img-card-animi");
//     }
// });

// // let navbar = () => $(window).scroll(function () {
// //     alert("a");
// // });

// $(window).scroll(function() {
//     var windowHeight = $(window).height();
//     var scrollTop = $(this).scrollTop();

//     // Check if #imgCard is visible in the viewport
//     if ($('#imgCard').offset().top < scrollTop + windowHeight) {
//         $('#imgCard').addClass("img-card-animi");
//         $('#imgCard h1, #imgCard p').addClass("img-card-content-animi");
//         $('#imgCard button').addClass("img-card-content-btn-animi");
//     }

//     // Check if the top section of the middle section is visible in the viewport
//     if ($('.middle-top-sec').eq(0).offset().top < scrollTop + windowHeight) {
//         $('.middle-top-sec').eq(0).addClass("middle-sec-icon-animi");
//         $('.middle-content-sec').eq(0).addClass("middle-sec-content-animi");
//     }

//     // Check if the second top section of the middle section is visible in the viewport
//     if ($('.middle-top-sec').eq(1).offset().top < scrollTop + windowHeight) {
//         $('.middle-top-sec').eq(1).addClass("middle-sec-icon-animi");
//     }

//     // Check if the first current feature section is visible in the viewport
//     if ($('.current-feature').eq(0).offset().top < scrollTop + windowHeight) {
//         $('.current-feature').eq(0).addClass("current-feature-animi");
//     }

//     // Check if the first bottom white card is visible in the viewport
//     if ($('.bottom-white-card').eq(0).offset().top < scrollTop + windowHeight) {
//         $('.bottom-white-card').eq(0).addClass("bottom-white-card-left-animi");
//     }

//     // Check if the second bottom white card is visible in the viewport
//     if ($('.bottom-white-card').eq(1).offset().top < scrollTop + windowHeight) {
//         $('.bottom-white-card').eq(1).addClass("bottom-white-card-left-animi");
//     }

//     // Check if the navbar is hidden and if the page is not at the top
//     if ($('#navbar').is(":hidden") && scrollTop > 0) {
//         $('#navbar').fadeIn(3000);
//     }
// });