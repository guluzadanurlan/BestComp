/* SWIPER JS */
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* SWIPER JS end*/






/* BOOTBOX JS */
  function func1(){
    var dialog = bootbox.dialog({
    title: 'Saytımıza abunə olursunuz...',
    message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
});
            
dialog.init(function(){
    setTimeout(function(){
        dialog.find('.bootbox-body').html('Təbriklər uğurla abunə oldunuz. Yeni məlumatlar sizə göndəriləcəkdir. ');
    }, 2000);
});
  }

  /* BOOTBOX JS */


  


