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
        fade: true,
        cssEase: 'linear'
    });


    $('.where_text_item').on('click', function() {
        var target = $(this).data('target');        
        $('.where_map_item').removeClass('active');        
        $('.where_map_item[data-target="' + target + '"]').addClass('active');        
        $('.where_text_item').removeClass('active');        
        $(this).addClass('active');
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
 
});