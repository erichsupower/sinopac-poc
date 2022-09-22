//get window width
let width = window.innerWidth;

// Hamburger toggle
$(".hamburger").click(function () {
  $(this).toggleClass("active");
  $(".navi-global").toggleClass("active");
  $("body").toggleClass("active");
});

// Window resize
$(window).resize(function () {
  //reset window width
  width = window.innerWidth;

  //close global navigation mask
  if (width < 768) {
    $(".hamburger").removeClass("active");
    $(".navi-global").removeClass("active");
    $("body").removeClass("active");
  }
});

// 展開子選單
$(".navi-item").hover(
  function () {
    console.log($(this));
    $(this).children(".navi-subItem").addClass("active");
  },
  function () {
    $(this).children(".navi-subItem").removeClass("active");
  }
);
