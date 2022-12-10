  $("#submit-login").click(function(){
    //password
    var reg = /^(?=.*[0-9])(?=.*[A-z])[A-Za-z0-9]+$/;
    var car = /(?=.*[0-9])(?=.*[A-z])^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/
    var pwdVal = $("#password-login").val();
    var length_ = pwdVal.length;
   

    //email
    var regEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var emailVal = $("#email").val();
    

    if (regEmail.test(emailVal) && (reg.test(pwdVal) || car.test(pwdVal) && length_ > 7) ) {
        alert("berhasil login")
        window.location.href = "my-profile.html"
    } else {
        alert("email atau password salah")
    }
  })


  function onSubmit(token) {
    alert('thanks ' + document.getElementById('field').value);
  }

  function validate(event) {
    event.preventDefault();
    if (!document.getElementById('field').value) {
      alert("You must add text to the required field");
    } else {
      grecaptcha.execute();
    }
  }

  function onload() {
    var element = document.getElementById('submit');
    element.onclick = validate;
  }