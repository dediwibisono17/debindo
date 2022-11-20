

// radio button
$('main input').click(function() {
    $('main input:not(:checked)').prev().removeClass("active_");
    $('main input:checked').prev().addClass("active_");
  });
  
  
  $("#submit-business").click(function(){
    let checked = $("input[name$='matrix-1']:checked");
    let checkedVal = checked.val();
    // var val_date = $(".matrix-1").val()
    if (checkedVal == undefined) {
      $(".matrix-1").parent().parent().next().addClass('show').text('Please select hour')
      // $("#10").addClass("iaia")
    } else {
      $(".matrix-1").parent().parent().next().removeClass('show')
    }
  
    var date_ = $("#select-date").val()
      if (date_.length < 1) {
        $("#select-date").next().next().addClass('show').text('Please Input Date');
        $("#select-date").focus()
    } else {
        $("#select-date").next().next().removeClass('show');
    }
  
    var exhibitor = $("#exhibitor_product").val();
      if (exhibitor.length < 1) {
          $("#exhibitor_product").next().next().next().addClass('show').text('Please select Exhibitor');
          $("#exhibitor_product").focus()
      } else {
          $("#exhibitor_product").next().next().next().removeClass('show');
      }
  
  // console.log(date_.length < 1);
      if (exhibitor.length > 0 && date_.length > 0 && checkedVal !=undefined) {
        alert("Berhasil")
      }
    
  })