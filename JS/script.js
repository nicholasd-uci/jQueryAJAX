// Promise Based function
$.ajax('http://www.omdbapi.com/?t=Goodfellas&apikey=11bc5e4c')
    // Runs when response from the request is successful
    .then(res => {
        $('#movie').html(`
        <img src="${res.Poster}" alt="${res.Title}">
        <h2>${res.Title}</h2>
        <h3>Directed by: ${res.Director}</h3>
        <p>${res.Plot}</p>
        `)
    })
    // Runs when request has an error
    .catch(err => { console.log(err) })


