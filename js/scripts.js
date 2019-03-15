$(document).ready(function () {
            //------------------------------
            $(".single-item").slick({
              dots: true
            });
            //------------------------------
            $('.multiple-items').slick({
              dots:true,
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 3
            });
            //------------------------------
            $('.responsive').slick({
              dots: true,
              infinite: false,
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 4,
              responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              ]
            });
            //------------------------------------------------
            $('.variable-width').slick({
              dots: true,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              centerMode: true,
              variableWidth: true
            });
            //----------------------------------------------
            $('.adaptive-height').slick({
              dots: true,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              adaptiveHeight: true
            });
            //---------------------------------------
            $('.center').slick({
              dots:true,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 3,
              responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
              ]
            });
            //-------------------------------------------
            $('.lazy').slick({
              dots: true,
              lazyLoad: 'ondemand',
              slidesToShow: 3,
              slidesToScroll: 1
            });
            //--------------------------------------------
            $('.autoplay').slick({
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            });
            //-----------------------------------------
            $('.fade').slick({
              dots: true,
              infinite: true,
              speed: 500,
              fade: true,
              cssEase: 'linear'
            });
            //----------------------------------------------
            var slideIndex = $('.add-remove >div').length;
            $('.add-remove').slick({
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 3
            });
            $('.js-add-slide').on('click', function () {
              slideIndex++;
              $('.add-remove').slick('slickAdd', '<div><h1>' + slideIndex + '</h1></div>');
            });

            $('.js-remove-slide').on('click', function () {
              $('.add-remove').slick('slickRemove', slideIndex - 1);
              if (slideIndex !== 0) {
                slideIndex--;
              }
            });
          });