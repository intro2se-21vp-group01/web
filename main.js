(function ($) {
    ("use strict");
  
    // canvas menu activation
    $(".canvas_open").on("click", function () {
      $(".offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active");
    });
  
    $(".canvas_close,.off_canvars_overlay").on("click", function () {
      $(".offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active");
    });
  
    //   off canvas menu
    var $offcanvasNav = $(".offcanvas_main_menu"),
      $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
    $offcanvasNavSubMenu
      .parent()
      .prepend(
        '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'
      );
  
    $offcanvasNavSubMenu.slideUp();
  
    $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
      var $this = $(this);
      if (
        $this
          .parent()
          .attr("class")
          .match(/\b(menu-item-has-children| has-children | has-sub-menu)\b/) &&
        ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
      ) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.siblings("ul").slideUp("slow");
        } else {
          $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
          $this.siblings("ul").slideDown("slow");
        }
      }
  
      if (
        $this.is("a") ||
        $this.is("span") ||
        $this.attr("class").match(/\b(menu-expand)\b/)
      ) {
        $this.parent().toggleClass("menu-open");
      } else if (
        $this.is("li") &&
        $this.attr("class").match(/\b('menu-item-has-children')\b/)
      ) {
        $this.toggleClass("menu-open");
      }
    });
  
    //   search box slidetoggle activation
    $(".search_box > a").on("click", function () {
      $(this).toggleClass("active");
      $(".search_widget").slideToggle("medium");
    });
  
    // slide toggle activation of mini cart
    $(".mini_cart_wrapper > a").on("click", function () {
      if ($(window).width() < 991) {
        $(".mini_cart").slideToggle("medium");
      }
    });



// sticky header
$(window).on("scroll", function (){
  var scroll = $(window).scrollTop();
  if(scroll < 100){
    $(".sticky-header").removeClass("sticky");
  }
  else{
    $(".sticky-header").addClass("sticky");
  }
});

function dataBackgroundImage(){
$("[data-bgimg]").each(function(){
  var bgImgUrl = $(this).data("bgimg");
  $(this).css({
    "background-image": "URL("+ bgImgUrl +")",
  });
});
}

$(window).on("load",function(){
  dataBackgroundImage();
});

//slider active
$(".slider_area").owlCarousel({
  animateOut : "fadeOut",
  autoplay: true,
  loop: true,
  nav: true,
  autoplay: false,
  autouplayTimeOut: 5000,
  items: 1,
  dots: false,
  navTest: [
    '<i class="fa fa-arrow-right"></i>',
    '<i class="fa fa-arrow-left"></i>',
  ],
});


})(jQuery);