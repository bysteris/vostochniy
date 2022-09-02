// Модальная форма на странице
$("#form-modal").submit(function () {
  var form = $(this);
  var error = false;
  if (!error) {
    var data = form.serialize();
    $.ajax({
      type: "POST",
      url: "/send.php",
      dataType: "html",
      data: data,
      beforeSend: function (data) {
        form.find('input[type="submit"]').attr("disabled", "disabled");
      },
      success: function (data) {
        if (data["error"]) {
          alert(data["error"]);
        } else {
          $("#form-modal_btn").addClass("active");
          setTimeout(function () {
            $("#form-modal_btn").removeClass("active");
          }, 2100);
          form
            .find("input, textarea")
            .not(
              ":input[type=button], :input[type=submit], :input[type=reset], :input[type=hidden], :input[name=header]"
            )
            .val("");
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      },
      complete: function (data) {
        form.find('input[type="submit"]').prop("disabled", false);
      },
    });
  }
  return false;
});

$("#form-feedback-one").submit(function () {
  var form = $(this);
  var error = false;
  if (!error) {
    var data = form.serialize();
    $.ajax({
      type: "POST",
      url: "/send.php",
      dataType: "html",
      data: data,
      beforeSend: function (data) {
        form.find('input[type="submit"]').attr("disabled", "disabled");
      },
      success: function (data) {
        if (data["error"]) {
          alert(data["error"]);
        } else {
          $("#form-one_btn").addClass("active");
          setTimeout(function () {
            $("#form-one_btn").removeClass("active");
          }, 2100);
          form
            .find("input, textarea")
            .not(
              ":input[type=button], :input[type=submit], :input[type=reset], :input[type=hidden], :input[name=header]"
            )
            .val("");
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      },
      complete: function (data) {
        form.find('input[type="submit"]').prop("disabled", false);
      },
    });
  }
  return false;
});

// Вторая форма на странице
$("#form-feedback-two").submit(function () {
  var form = $(this);
  var error = false;
  if (!error) {
    var data = form.serialize();
    $.ajax({
      type: "POST",
      url: "/send.php",
      dataType: "html",
      data: data,
      beforeSend: function (data) {
        form.find('input[type="submit"]').attr("disabled", "disabled");
      },
      success: function (data) {
        if (data["error"]) {
          alert(data["error"]);
        } else {
          $("#form-two_btn").addClass("active");
          setTimeout(function () {
            $("#form-two_btn").removeClass("active");
          }, 2100);
          form
            .find("input, textarea")
            .not(
              ":input[type=button], :input[type=submit], :input[type=reset], :input[type=hidden], :input[name=header]"
            )
            .val("");
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      },
      complete: function (data) {
        form.find('input[type="submit"]').prop("disabled", false);
      },
    });
  }
  return false;
});

// Форма в блоке контакты
$(".form-feedback_contacts").submit(function () {
  var form = $(this);
  var error = false;
  if (!error) {
    var data = form.serialize();
    $.ajax({
      type: "POST",
      url: "/send.php",
      dataType: "html",
      data: data,
      beforeSend: function (data) {
        form.find('input[type="submit"]').attr("disabled", "disabled");
      },
      success: function (data) {
        if (data["error"]) {
          alert(data["error"]);
        } else {
          $(".contacts_btn-container").addClass("active");
          setTimeout(function () {
            $(".contacts_btn-container").removeClass("active");
          }, 2100);
          form
            .find("input, textarea")
            .not(
              ":input[type=button], :input[type=submit], :input[type=reset], :input[type=hidden], :input[name=header]"
            )
            .val("");
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      },
      complete: function (data) {
        form.find('input[type="submit"]').prop("disabled", false);
      },
    });
  }
  return false;
});
