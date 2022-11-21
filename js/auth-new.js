$("#password-new").on('input', function() {
    var reg = /^(?=.*[0-9])(?=.*[A-z])[A-Za-z0-9]+$/;
    var car = /(?=.*[0-9])(?=.*[A-z])^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/
    var pwdVal = $(this).val();
    var length_ = pwdVal.length;
    $(".sisa").text(length_)
        // console.log(car.test(pwdVal));
    if (length_ < 8) {
        $(this).next().next().next().addClass('show').text('Minimal 8 letters and 1 number');
        if (!reg.test(pwdVal) || !car.test(pwdVal)) {
            $(this).next().next().next().addClass('show').text('Minimal 8 letters and 1 number');
        }
    } else {
        if (length_ > 7 && reg.test(pwdVal) || car.test(pwdVal)) {
            $(this).next().next().next().removeClass('show');
            // console.log('betul?');
        } else {
            $("#password-new").next().next().next().addClass('show').text('Minimal 8 letters and 1 number');
            // $("#password-register").focus();
            // alert('salah semua')
            //console.log('salah semua');
        }
    }
})

$("#password-new1").on('input', function() {
    var pwdVal = $(this).val();
    var pwd1 = $("#password-new").val()
    console.log(pwdVal == pwd1);
        // console.log(car.test(pwdVal));
    if(pwdVal == pwd1) {
        $(this).next().next().next().addClass('show').text('Password Match').css("color","green");
    } else {
        $(this).next().next().next().addClass('show').text('Password not match');
    }
})

$("#submit-forgot").click(function(){
    var pwd1 = $("#password-new").val()
    var pwd2 = $("#password-new1").val()

    if (pwd1 == pwd2) {
        alert('Berhasil ganti password')
    }
})

