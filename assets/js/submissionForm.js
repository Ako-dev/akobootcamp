// close modal on esc key
$(document).ready(() => {
  $('#submitFormBtn').on('click', (e) => {
    e.preventDefault()

    let form = $('form').serializeArray()

    let data2 = form.reduce((acc, cv) => {
      return {
        ...acc,
        [cv.name]: cv.value,
      }
    }, {})

    console.log(data2)



    $.ajax({
      type: 'POST',
      crossDomain: true,
      data: data,
      url: 'https://tranquil-mesa-15283.herokuapp.com/api/createuser',
      success: function (jsondata) {
        console.log(jsondata)
      }
    })
  })
})
