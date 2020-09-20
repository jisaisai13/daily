window.onload = function () {
  function $(param) {
    if (arguments[1] == true) {
      return document.querySelectorAll(param);
    } else {
      return document.querySelector(param);
    }
  }
  var $swiper = $(".swiper");
  var $swiperItem = $(".swiper-item ul li", true);
  var $swiperPages = $(".swiper-pages ul");
  var $swiperBtns = $(".swiper-btns");
  var $length = $swiperItem.length;

  var str = "";
  for (var i = 0; i < $length; i++) {
    if (i == 0) {
      str += "<li class='active'>" + (i + 1) + "</li>";
    } else {
      str += "<li>" + (i + 1) + "</li>";
    }
  }
  $swiperPages.innerHTML = str;

  var current = 1;

  var timer;
  timer = setInterval(go, 1000);
  function go() {
    for (var j = 0; j < $length; j++) {
      $swiperItem[j].className = "";
      $swiperPages.children[j].className = "";
    }
    if ($length == current) {
      current = 0;
    }
    $swiperItem[current].className = "open";
    $swiperPages.children[current].className = "active";
    current++;
  }

  for (var k = 0; k < $length; k++) {
    $swiperItem[k].onmouseover = function () {
      clearInterval(timer);
    }
    $swiperItem[k].onmouseout = function () {
      timer = setInterval(go, 1000);
    }
  }
  for (var p = 0; p < $swiperBtns.children.length; p++) {
    $swiperBtns.children[p].onmouseover = function () {
      clearInterval(timer);
    };
    $swiperBtns.children[p].onmouseout = function () {
      timer = setInterval(go, 1000);
    }
  }

  for (var u = 0; u < $length; u++) {
    $swiperPages.children[u].index = u;
    $swiperPages.children[u].onmouseover = function () {
      clearInterval(timer);
      for (var j = 0; j < $length; j++) {
        $swiperItem[j].className = "";
        $swiperPages.children[j].className = "";
      }
      this.className = "active";
      $swiperItem[this.index].className = "open";
      current = this.index + 1;
    }
    $swiperPages.children[u].onmouseout = function () {
      timer = setInterval(go, 1000);
    }
  }

  $swiperBtns.children[0].onclick = function () {
    back();
  }
  $swiperBtns.children[1].onclick = function () {
    go();
  }
  function back() {
    for (var j = 0; j < $length; j++) {
      $swiperItem[j].className = "";
      $swiperPages.children[j].className = "";
    }
    if (current == 0) {
      current = $length;
    }
    $swiperItem[current - 1].className = "open";
    $swiperPages.children[current - 1].className = "active";
    current--;
  }
}