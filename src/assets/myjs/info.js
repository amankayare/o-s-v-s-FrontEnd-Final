$(function () {

    $(window).on('scroll', function() {
        if($(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });

});

const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

  