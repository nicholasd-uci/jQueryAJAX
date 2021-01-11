// Promise Based function
$.ajax('http://www.omdbapi.com/?t=Goodfellas&apikey=11bc5e4c')
    // Runs when response from the request is successful
    .then(res => {
        console.log(res.poster)

        $('#poster').attr('src', res.poster)
    })
    // Runs when request has an error
    .catch(err => {
        console.log(err)
    })


