  $("#submit-forgot").click(function(){

    //email
    var regEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var emailVal = $("#email-forgot").val();
    

    if (regEmail.test(emailVal) ) {
        alert("berhasil terkirim")
    } else {
        alert("email salah")
    }
  })
