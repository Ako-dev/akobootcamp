// close modal on esc key
$(document).ready(() => {
  $("#submitFormBtn").on("click", (e) => {
    e.preventDefault()

    console.log($("form"))
    let data = {
      firstName: 'william',
      lastName: 'vasquex',
      email: 'will@william.com  ',
    }

    // $.ajax({
    //   type: 'POST',
    //   crossDomain: true,
    //   data: data,
    //   url: 'https://tranquil-mesa-15283.herokuapp.com/api/createuser',
    //   success: function (jsondata) {
    //     console.log(jsondata)
    //   }
    // })
  })
})
