console.log('file 1');
$(document).ready(function($){
  
  $(".contact-application").click(function(e) {
    e.preventDefault()
    $(".modal-header").css({"display":"block"});
  })
  $(".modal-close").click(function(e) {
    e.preventDefault()
    $(".modal-header").css({"display":"none"});
  })
  $(".btn-thender").click(function(e) {
    e.preventDefault()
    $(".modal-header").css({"display":"block"});
  })
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
       breakpoint: 576,
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
     fname: 'Это поле является обязательным',
     user_email: 'Это поле является обязательным',
     phone: 'Это поле является обязательным'
   },
   submitHandler: function(form) {
    $("#form1").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
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
    fname: 'Это поле является обязательным',
    user_email: 'Это поле является обязательным',
    phone: 'Это поле является обязательным'
   },
   submitHandler: function(form) {
    $("#form2").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
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
    fname: 'Это поле является обязательным',
    user_email: 'Это поле является обязательным',
    phone: 'Это поле является обязательным'
   },
   submitHandler: function(form) {
    $("#form3").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
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
    fname: 'Это поле является обязательным',
    user_email: 'Это поле является обязательным',
    phone: 'Это поле является обязательным'
   },
   submitHandler: function(form) {
    $("#form4").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
   }
 });
 $('#form5').validate({
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
    fname: 'Это поле является обязательным',
    user_email: 'Это поле является обязательным',
    phone: 'Это поле является обязательным'
   },
   submitHandler: function(form) {
    $("#form5").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
   }
 });
 $('#form6').validate({
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
    fname: 'Это поле является обязательным',
     user_email: 'Это поле является обязательным',
     phone: 'Это поле является обязательным'
  },
  submitHandler: function(form) {
    $("#form6").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
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