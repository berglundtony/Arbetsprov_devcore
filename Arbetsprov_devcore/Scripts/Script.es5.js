﻿'use strict';

function updateMenuButton() {
    $('.js-menu-button').find('.menu-icon').toggleClass('is-active');
}

function openNav() {
    $("#Menu").css("width", 250);
    $(".menu-icon").css("margin-right", 250);
    $(".overlay").show();
}

function closeNav() {
    $("#Menu").css("width", 0);
    $(".top").css("width", "100%");
    $(".menu-icon").css("margin-right", 0);
    $(".overlay").hide();
}

$(function () {
    $('.js-menu-button').on("click", function () {
        var menuicon = $('.js-menu-button').find('.menu-icon');
        openNav();
        if (menuicon.is(".is-active")) {
            closeNav();
        } else {
            openNav();
        }
        updateMenuButton();
    });
    $('.overlay').on("click", function () {
        $('.js-menu-button').trigger('click');
    });
});

