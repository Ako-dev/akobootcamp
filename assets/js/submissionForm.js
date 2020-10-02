// close modal on esc key
$(document).ready(() => {
  $("#submitFormBtn").on("click", (e) => {
    // e.preventDefault()
    let form = $("form").serializeArray();

    let data = form.reduce((acc, cv) => {
      return {
        ...acc,
        [cv.name]: cv.value,
      };
    }, {});

    // console.log(data);

    if (data.firstName.length < 3 || data.email.length < 3) {
      // console.log("data.firstName.length", data.firstName.length);
      // console.log("data.email.length", data.email.length);
    } else {
      console.log("inside second if");
      e.preventDefault();
      $.ajax({
        type: "POST",
        crossDomain: true,
        data: data,
        url: "https://tranquil-mesa-15283.herokuapp.com/api/createuser",
        success: function (jsondata) {
          document.getElementById("myForm").reset();
          console.log('return', jsondata);
        },
      });
      $("#submitFormBtn").attr("data-dismiss", "modal");
    }
  });
});
