jQuery(document).ready(function () {
  if (jQuery('.natural')) {

    jQuery(".natural__list").owlCarousel({
        loop: true,
        autoplay: true,
      responsive: {
        0: {
          items: 1,
          margin: 10,
          loop: true,
          dots: false
        },
        768: {
          items: 1,
          nav: false,
          margin: 10
        }
      }
    });

  }

  if (jQuery('.sertif')) {

    jQuery(".sertif__slider").owlCarousel({
      items: 2,
      margin: 37,
      loop: true,
      dots: true
    });

  }

    if (jQuery('.elina')) {

        jQuery(".elina__slider").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false
        });

    }

  if (jQuery('.common-input-tel')) {
      jQuery('.common-input-tel').inputmask("+X (999) 999-9999", {
          definitions: {
              "X": {
                  validator: "[7-9]",
              }
          },
          oncomplete: function(){
              jQuery(this).val('+7' + jQuery(this).val().substring(2));
          }
      });
  }
    /*url check for buy*/
    let utmUrl = decodeURI(document.location.search);
    if (!(~utmUrl.indexOf('/checkout/order-received/')) && jQuery('.woocommerce-order-overview__order').length) {
        let priceAmountForFbq = jQuery('.is-well .woocommerce-Price-amount.amount');
        priceAmountForFbq = Array.prototype.slice.call(priceAmountForFbq);
        priceAmountForFbq = priceAmountForFbq[0].textContent || priceAmountForFbq[0].innerText;
        priceAmountForFbq = priceAmountForFbq.substr(4);
        priceAmountForFbq = Number(priceAmountForFbq);
        fbq('track', 'Purchase', {value: priceAmountForFbq, currency: 'USD'});
    }
    /*/url check for buy*/
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '523' == event.detail.contactFormId || '526' == event.detail.contactFormId ) {
            fbq('track', 'Lead');
        }
    }, false );
});