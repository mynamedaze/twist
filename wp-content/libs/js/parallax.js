$(document).ready(function () {
  const target = document.getElementsByClassName('parallax');
  let length = target.length;
  window.addEventListener('scroll', function(e) {
    let index = 0;
    for (index; index < length; index++) {
      var pos = window.pageYOffset * target[index].dataset.rate;

      target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';

    }


  });
});