$(document).ready(function() {
    "use strict";

    $(".header_block_left_burger").click(function() {
        $(this).toggleClass("active");
        $(".back_modal").toggleClass("active");
        $(".dropdown").toggleClass("active");
        $(".header_block_right_search_wrap").removeClass("active");
    });

    $(".back_modal").click(function() {
        $(".header_block_left_burger").removeClass("active");
        $(".back_modal").removeClass("active");
        $(".dropdown").removeClass("active");
    });

    $("#search").on('input', function() {
        var inputVal = $(this).val();
        if (inputVal !== '') {
            $('.header_block_right_search_drop').addClass('active');
        } else {
            $('.header_block_right_search_drop').removeClass('active');
        }
    });

    $('.review_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        appendDots: $(".review_dots"),
        autoplay: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                draggable: true,
                autoplay: false,
                swipe: true 
              }
            }
        ]
    });

    if($(window).width() < 768) {
        $('.review_slider').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
            let nextIndex = currentSlide + 1;
            if(currentSlide-1 == nextSlide || (nextSlide+1 == slick.slideCount && currentSlide < nextSlide)) {
                nextIndex = currentSlide - 1;
            }
            $(`[data-slick-index="${nextIndex}"]`).addClass('slick-target');
        });
    
        $('.review_slider').on('afterChange', () => {
            $('.slick-slide').removeClass('slick-target');
        });
    }

    $(".review_slider_item_info_text_btn").click(function() {
        $(this).closest('.review_slider_item').addClass("active");
    });
    
    $(".review_slider_item_btn").click(function() {
        $(this).closest('.review_slider_item').addClass("active");
    });

    $(".review_slider_item_video_back").click(function() {
        $(this).closest('.review_slider_item').removeClass("active");
    });

    $(".modal_filter_top_close").click(function() {
        $(".modal_filter").removeClass("active");
        $(".back_filter").removeClass("active");
    });

    $(".back_filter").click(function() {
        $(".modal_filter").removeClass("active");
        $(".back_filter").removeClass("active");
    });

    $(".catalog_filter_mob").click(function() {
        $(".modal_filter").addClass("active");
        $(".back_filter").addClass("active");
    });

    $(".header_block_right_search_form_remove").click(function() {
        $("#search").val("");
        $('.header_block_right_search_drop').removeClass('active');
    });

    $(".header_block_right_search_btn").click(function() {
        $(".header_block_right_search_wrap").toggleClass("active");
        $("#search").val("");
        $('.header_block_right_search_drop').removeClass('active');
        $('.header_block_left_burger').removeClass('active');
        $(".dropdown").removeClass('active');
        $(".back_modal").removeClass('active');
    });

    $(".blog_item_text_down_share").click(function() {
        $(this).closest('.blog_item').addClass("active");
    });

    $(".news_item_text_down_share").click(function() {
        $(this).closest('.news_item').addClass("active");
    });

    $(".single_footer_up_share").click(function() {
        $(this).closest('.single').addClass("active");
    });

    $(document).on('click', function(event) {
        // Проверка, что клик был не по блоку и не по кнопке поиска
        if (!$(event.target).closest('.header_block_right_search_wrap, .header_block_right_search_btn').length) {
            // Если клик был вне блока, убираем класс active
            $('.header_block_right_search_drop').removeClass('active');
            $(".header_block_right_search_wrap").removeClass("active");
        }
    });

    $('.main_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });

    if($(window).width() < 768) {
        $('.about_list').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });

        $('.about_slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }

    $(".news_all_head").click(function() {
        $(".news_all").toggleClass("active");
        $(this).parent().find(".news_all_list").slideToggle();
    });

    $('.where_text_item').on('click', function() {
        var target = $(this).data('target');        
        $('.where_map_item').removeClass('active');        
        $('.where_map_item[data-target="' + target + '"]').addClass('active');        
        $('.where_text_item').removeClass('active');        
        $(this).addClass('active');
    });

    $('.find_mob_item').on('click', function() {
        $('.find_mob_item').removeClass("active");
        var target = $(this).data('target');        
        $('.find_map_item').removeClass('active');        
        $('.find_map_item[data-target="' + target + '"]').addClass('active');        
        $('.find_text_item').removeClass('active');
        $('.find_text_item[data-target="' + target + '"]').addClass('active');   
        $(this).addClass('active');
    });

    $('.find_sidebar_nav_item').on('click', function() {
        $('.find_sidebar_nav_item').removeClass("active");
        var target = $(this).data('target');        
        $('.find_map_item').removeClass('active');        
        $('.find_map_item[data-target="' + target + '"]').addClass('active');        
        $('.find_text_item').removeClass('active');
        $('.find_text_item[data-target="' + target + '"]').addClass('active');   
        $(this).addClass('active');
    });

    $(".product_six_text button").click(function() {
        $(this).css("display", "none");
        $(".product_six_text_description p").css("display", "block");
    });

    if ($(window).width() < 1200) {
        $('.technologies_block_nav_item').off('click').on('click', function () {
            $(".technologies_block_nav_item").removeClass("active");
            var target = $(this).data('target');
            $(this).addClass("active");
            $(".technologies_block_img img").removeClass('active');
            $(".technologies_block_text_item").removeClass('active');
            $('.technologies_block_img img[data-target="' + target + '"').addClass('active');
            $('.technologies_block_text_item[data-target="' + target + '"').addClass('active');
        });
    } else {
        $('.technologies_block_nav_item').off('mouseenter').on('mouseenter', function () {
            $(".technologies_block_nav_item").removeClass("active");
            var target = $(this).data('target');
            $(this).addClass("active");
            $(".technologies_block_img img").removeClass('active');
            $(".technologies_block_text_item").removeClass('active');
            $('.technologies_block_img img[data-target="' + target + '"').addClass('active');
            $('.technologies_block_text_item[data-target="' + target + '"').addClass('active');
        });
    }

    $('.categories_item_text_btn').on('click', function(event) {
        event.preventDefault();
        var parent = $(this).closest('.categories_item');
        parent.find('.categories_item_img_info').toggleClass('active');
    });

    $('.terms_item_head_btn').on('click', function(event) {
        event.preventDefault();
        var parent = $(this).closest('.terms_item');
        parent.find('.terms_item_img_info').toggleClass('active');
    });

    $('.categories_item_img_btn').on('click', function(event) {
        event.preventDefault();
        var parent = $(this).closest('.categories_item');
        parent.find('.categories_item_text_info').toggleClass('active');
    });

    $('select').niceSelect();
 
});