console.log('file 1');
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    dotsClass: 'dots-style',
    responsive: [{
       breakpoint: 1025,
       settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
       }
    }, {
       breakpoint: 688,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
       }
    }]
 });

 function sliderHandler(price) {
    // calculate
    if (price === undefined) {
      price = srvPrices;
    }
    var extra1 = (c1.checked) ? parseInt(c1.value) : 0;
    var extra2 = (c2.checked) ? parseInt(c2.value) : 0;
    var persents = price.totalS1 * price.totalS2 * 0.05;
    var result = Math.round(price.totalS1 * price.totalS2 * 120000 - persents);
    document.getElementById("s1").innerHTML = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  var srvPrices = {}
  var c1 = document.getElementById("s3-check1");
  var c2 = document.getElementById("s3-check2");

  c1.addEventListener("change", function() {
    sliderHandler()
  });
  c2.addEventListener("change", function() {
    sliderHandler()
  });

  $(".range1").ionRangeSlider({
    from: 3,
    grid: true,
    values: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    onChange: function (data) {
      srvPrices.totalS1 = data.from_value;
      sliderHandler(srvPrices)
    },
    onStart: function(data) {
      srvPrices.totalS1 = data.from_value;
      sliderHandler(srvPrices)
    }
});

  $(".range2").ionRangeSlider({
    from: 2,
    grid: true,
    values: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    onChange: function (data) {
      srvPrices.totalS2 = data.from_value;
      sliderHandler(srvPrices)
    },
    onStart: function(data) {
      srvPrices.totalS2 = data.from_value;
      sliderHandler(srvPrices)
    }
});