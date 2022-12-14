$(document).ready(function () {
  /*====== SidebarCart ======*/
  // $('.main-wrapper').prepend('<div class="body-overlay"></div>');
  //
  // $('.cart-active').on('click', function(e) {
  //   e.preventDefault();
  //   $('.sidebar-cart-active').addClass('inside');
  //   $('.main-wrapper').addClass('overlay-active');
  // });
  //
  // $('.cart-close').on('click', function() {
  //   $('.sidebar-cart-active').removeClass('inside');
  //   $('.main-wrapper').removeClass('overlay-active');
  // });
  //
  // $('.body-overlay').on('click', function() {
  //   $('.sidebar-cart-active').removeClass('inside');
  //   $('.main-wrapper').removeClass('overlay-active');
  // });
  /*-------------------------------
       Header Search Toggle
      -----------------------------------*/
  var searchToggle = $('.search-toggle');
  searchToggle.on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $(this).siblings('.search-wrap-1').removeClass('open');
    }else{
      $(this).addClass('open');
      $(this).siblings('.search-wrap-1').addClass('open');
    }
  })
  /*====== Sidebar menu Active ======*/
  var navbarTrigger = $('.mobile-header-button-active'),
    endTrigger = $('.sidebar-close'),
    container = $('.mobile-header-active'),
    wrapper4 = $('.main-wrapper');

  wrapper4.prepend('<div class="body-overlay-1"></div>');

  navbarTrigger.on('click', function(e) {
    e.preventDefault();
    container.addClass('sidebar-visible');
    wrapper4.addClass('overlay-active-1');
  });

  endTrigger.on('click', function() {
    container.removeClass('sidebar-visible');
    wrapper4.removeClass('overlay-active-1');
  });

  $('.body-overlay-1').on('click', function() {
    container.removeClass('sidebar-visible');
    wrapper4.removeClass('overlay-active-1');
  });



  /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
  $('.dec.qtybutton').click(function () {
    let value=$('.cart-plus-minus-box').val();
    alert(value);

    if (value>1){
      value=value-1;
      alert(value);
    }
  });
  $('.inc.qtybutton').click(function () {
    let values=$('.cart-plus-minus-box').val();
    values=values+1;
    alert(values);

  });

  /*--
          Magnific Popup
      ------------------------*/
  $('.img-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('.easyzoom').easyZoom();
});
