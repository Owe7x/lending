console.log('file 1');
$(document).ready(function($){
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    dotsClass: 'dots-style',
    responsive: [{
       breakpoint: 1200,
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

 $("#phone").mask("+7(999) 999-9999")

 $('#form1').validate({
   rules: {
     fname: 'required',
     user_email: {
       required: true,
       email: true,
     },
     phone: {
      required: true,
      minlength: 10,
  },
   },
   messages: {
     fname: 'This field is required',
     user_email: 'Enter a valid email',
     phone: 'Please enter your phone number'
   },
   submitHandler: function(form) {
     form.submit();
   }
 });
 $('#form2').validate({
   rules: {
     fname: 'required',
     user_email: {
       required: true,
       email: true,
     },
     phone: {
      required: true,
      minlength: 10,
  },
   },
   messages: {
     fname: 'This field is required',
     user_email: 'Enter a valid email',
     phone: 'Please enter your phone number'
   },
   submitHandler: function(form) {
     form.submit();
   }
 });
 $('#form2').validate({
   rules: {
     fname: 'required',
     user_email: {
       required: true,
       email: true,
     },
     phone: {
      required: true,
      minlength: 10,
  },
   },
   messages: {
     fname: 'This field is required',
     user_email: 'Enter a valid email',
     phone: 'Please enter your phone number'
   },
   submitHandler: function(form) {
     form.submit();
   }
 });
 $('#form3').validate({
   rules: {
     fname: 'required',
     user_email: {
       required: true,
       email: true,
     },
     phone: {
      required: true,
      minlength: 10,
  },
   },
   messages: {
     fname: 'This field is required',
     user_email: 'Enter a valid email',
     phone: 'Please enter your phone number'
   },
   submitHandler: function(form) {
     form.submit();
   }
 });
 $('#form4').validate({
   rules: {
     fname: 'required',
     user_email: {
       required: true,
       email: true,
     },
     phone: {
      required: true,
      minlength: 10,
  },
   },
   messages: {
     fname: 'This field is required',
     user_email: 'Enter a valid email',
     phone: 'Please enter your phone number'
   },
   submitHandler: function(form) {
     form.submit();
   }
 });
 function sliderHandler(price) {
   // calculate
   if (price === undefined) {
     price = srvPrices;
   }

   var persents = price.totalS1 * price.totalS2 * 120000 * 0.05;
   var result = Math.round(price.totalS1 * price.totalS2 * 120000 - persents);
   document.getElementById("s1").innerHTML = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей';
   document.querySelector(".polzunok__value").innerHTML = price.totalS1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") ;
   document.querySelector(".polzunok__value-one").innerHTML = price.totalS2;
 }

 var srvPrices = {}
 var c1 = document.getElementById("s3-check1");
 var c2 = document.getElementById("s3-check2");


 $(".range1").ionRangeSlider({
   from: 3,
   grid: false,
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
   grid: false,
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

})