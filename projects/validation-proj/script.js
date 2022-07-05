function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
  return regex.test(email);
}

$('#submitButton').click(function () {
  let errorMessage = [];
  let fieldMissing = '';

  if ($('#email').val() === '') {
    fieldMissing += '<br>Please put in an email';
  }

  if ($('#phone').val() === '') {
    fieldMissing += '<br>Please put in an phone';
  }

  if ($('#password').val() === '') {
    fieldMissing += '<br>Please put in an password';
  }

  if ($('#passwordConfirm').val() === '') {
    fieldMissing += '<br>Please confirm your password';
  }

  if (fieldMissing !== '') {
    errorMessage.push('The follow fields are missing: ' + fieldMissing);
  }
  if (isEmail($('#email').val()) === false) {
    errorMessage.push('<p>That is not a valid email</p>');
  }

  if ($.isNumeric($('#phone').val()) === false) {
    errorMessage.push('<p>That is not a valid phone</p>');
  }

  if ($('#password').val() !== $('#passwordConfirm').val()) {
    errorMessage.push('<p>Your passwords do not match</p>');
  }

  if (errorMessage !== '') {
    $('#errorMessage').html(errorMessage.concat());
  } else {
    $('#successMessage').show();
    $('#errorMessage').hide();
  }
});
