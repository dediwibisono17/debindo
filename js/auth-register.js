// vaidasi register
$("#name_").on('input', function() {
    var regName = /^[a-zA-Z ]{6,30}$/;
    var nameVal = $(this).val();
    if (!regName.test(nameVal)) {
        if (nameVal.length < 6) {
            $(this).next().next().addClass('show').text('Minimal 6 letters')
        }
    } else {
        $(this).next().next().removeClass('show');
    }
});

$("#address").on('input', function() {
    var regName = /^[a-zA-Z ]{6,30}$/;
    var nameVal = $(this).val();
    if (!regName.test(nameVal)) {
        if (nameVal.length < 6) {
            $(this).next().next().addClass('show').text('Minimal 6 letters')
        }
    } else {
        $(this).next().next().removeClass('show');
    }
});

$("#email").on('input', function() {
    var regEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var emailVal = $(this).val();
    if (!regEmail.test(emailVal)) {
        $(this).next().next().addClass('show').text('Wrong Format')
    } else {
        $(this).next().next().removeClass('show');
    }
});
  
  document.getElementById('no_').addEventListener('keydown', function(e) {
    if (e.which === 38 || e.which === 40) {
        e.preventDefault();
    }
  });

  $("#password-register").on('input', function() {
    var reg = /^(?=.*[0-9])(?=.*[A-z])[A-Za-z0-9]+$/;
    var car = /(?=.*[0-9])(?=.*[A-z])^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/
    var pwdVal = $(this).val();
    var length_ = pwdVal.length;
    $(".sisa").text(length_)
        // console.log(car.test(pwdVal));
    if (length_ < 8) {
        $(this).next().next().next().addClass('show').text('Minimal 8 letters and 1 number ');
        if (!reg.test(pwdVal) || !car.test(pwdVal)) {
            $(this).next().next().next().addClass('show').text('Minimal 8 letters and 1 number ');
        }
    } else {
        if (length_ > 7 && reg.test(pwdVal) || car.test(pwdVal)) {
            $(this).next().next().next().removeClass('show');
            // console.log('betul?');
        } else {
            $("#password-register").next().next().next().addClass('show').text('Minimal 8 letters and 1 number ');
            // $("#password-register").focus();
            // alert('salah semua')
            //console.log('salah semua');
        }
    }
})
  
  $("#no_").on('input', function() {
    var valHP = $(this).val();
    var handphone = /^[0-9]{11,13}$/;
    if (!handphone.test(valHP)) {
        if (valHP.length < 10 && valHP.length >= 1) {
            $(this).next().next().addClass('show').text('Minimal 10 digits');
            $(this).next().next().hide();
        } else if (valHP.length > 13) {
            $(this).next().next().addClass('show').text('Maximal 13 digits');
        } else if (valHP.length < 1) {
            $(this).next().next().addClass('show').text('Empty Field');
        }
    } else {
        $(this).next().next().removeClass('show');
    }
  });
  // end validasi register


  $("#submit-register").click(function(){
    let checked = $("input[name$='category']:checked");
    let checkedVal = checked.val();
    if (checkedVal == undefined) {
      $(".form-check-label").parent().parent().prev().addClass('show').text('Please select category')
    } else {
      $(".form-check-label").parent().parent().prev().removeClass('show')
    }

    //no hp
    var valHP = $("#no_").val();
    var handphone = /^[0-9]{11,13}$/;
    if (!handphone.test(valHP)) {
        if (valHP.length < 10 && valHP.length >= 1) {
            $("#no_").next().next().addClass('show').text('Minimal 10 digits');
            $("#no_").next().next().hide();
            $("#no_").focus()
        } else if (valHP.length > 13) {
            $("#no_").next().next().addClass('show').text('Maximal 13 digits');
            $("#no_").focus()
        } else if (valHP.length < 1) {
            $("#no_").next().next().addClass('show').text('Empty Field');
            $("#no_").focus()
        }
    } else {
        $("#no_").next().next().removeClass('show');
    }


    //password
    var reg = /^(?=.*[0-9])(?=.*[A-z])[A-Za-z0-9]+$/;
    var car = /(?=.*[0-9])(?=.*[A-z])^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/
    var pwdVal = $("#password-register").val();
    var length_ = pwdVal.length;
    $(".sisa").text(length_)
        // console.log(car.test(pwdVal));
    if (length_ < 8) {
        $("#password-register").next().next().next().addClass('show').text('Minimal 8 letters and 1 number ');
        $("#password-register").focus()
        if (!reg.test(pwdVal) || !car.test(pwdVal)) {
            $("#password-register").next().next().next().addClass('show').text('Minimal 8 letters and 1 number ');
            $("#password-register").focus()
        }
    } else {
        if (length_ > 7 && reg.test(pwdVal) || car.test(pwdVal)) {
            $("#password-register").next().next().next().removeClass('show');
            // console.log('betul?');
        } else {
            $("#password-register").next().next().next().addClass('show').text('Minimal 8 letters and 1 number ');
            $("#password-register").focus()
        }
    }

    //email
    var regEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var emailVal = $("#email").val();
    if (!regEmail.test(emailVal)) {
        $("#email").next().next().addClass('show').text('Wrong Format')
        $("#email").focus();
    } else {
        $("#email").next().next().removeClass('show');
    }

    //address
    var regName = /^[a-zA-Z ]{6,30}$/;
    var nameVal = $("#address").val();
    if (!regName.test(nameVal)) {
        if (nameVal.length < 6) {
            $("#address").next().next().addClass('show').text('Minimal 6 letters');
            $("#address").focus()
        }
    } else {
        $("#address").next().next().removeClass('show');
    }
    
    //nama
    var regName = /^[a-zA-Z ]{6,30}$/;
    var nameVal = $("#name_").val();
    if (!regName.test(nameVal)) {
        if (nameVal.length < 6) {
            $("#name_").next().next().addClass('show').text('Minimal 6 letters');
            $("#name_").focus()
        }
    } else {
        $("#name_").next().next().removeClass('show');
    }

    

    if (regName.test(nameVal) && regEmail.test(emailVal) && handphone.test(valHP) && (reg.test(pwdVal) || car.test(pwdVal) && length_ > 7) && checkedVal !=undefined) {
        alert("berhasil Register");
        window.location.href="my-profile.html"
    }
  })


  $(document).ready(function(){
    $('#country').select2({
      "language": {
          "noResults": function() {
              return "<span>Country Not Found</span>";
          }
      },
      escapeMarkup: function(markup) {
          return markup;
      }
  })
})