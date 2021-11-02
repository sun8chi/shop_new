window.onload = function() {
  var newsSlider = new Swiper('.newsSlider', {
    loop: true,
    autoplay:2300,
  });
  var homeSlider = new Swiper('.home-slider', {
    loop: false,
    pagination: '.pagHome',
  });
  var swiperCate = new Swiper('.swiper-cate', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    paginationClickable: true,
    spaceBetween: 10
  });
};
$('.toggleRightMenu').click(function (e) { 
  e.preventDefault();
  $('.right_menu').toggleClass('show');
});
$('.toggleSearchBar').click(function (e) { 
  e.preventDefault();
  $('.search_bar').toggleClass('show');
});
$('.counter').click(function(e) {
  let action = e.target.className;
  if (action == 'add') {
    let num = parseInt(this.children[1].innerHTML);
    num += 1;
    this.children[1].innerHTML = num;
    if (num > 0) {
      this.children[0].style.color = '#F05E1C';
    }
  } else if (action == 'dis') {
    let num = parseInt(this.children[1].innerHTML);
    if (num > 0) {
      num -= 1;
      this.children[1].innerHTML = num;
      this.children[0].style.color = '#F05E1C';
    }
    if (num == 0) {
      this.children[0].style.color = '#c9c9c9';
    }
  }
});

$('.hide-popup').click(function(e) {
  $('.popup').hide();
  event.preventDefault();
  $('.popup-cover').remove();
  $('body').removeClass('overflow-hidden');
});
$('.btn-popup').click(function(e) {
  e.preventDefault();
  var N = $(this).attr('data-popup');
  $('.' + N).slideToggle();
  $('body').append('<div class="popup-cover"></div>');
  $('body').addClass('overflow-hidden');
});

$('.backBtn').click(function(e) {
  e.preventDefault();
  history.back();
});
// 規格選擇 樣式切換
$('#optionList').on('click', '.select-type .aui-label', function() {
  $(this)
    .parent()
    .find('.active')
    .removeClass('active');
  $(this).addClass('active');
});
$('.popup-content').on('click', '.select-type .aui-label', function() {
  $(this)
    .parent()
    .find('.active')
    .removeClass('active');
  $(this).addClass('active');
});

