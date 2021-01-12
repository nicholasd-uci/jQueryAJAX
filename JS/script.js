// Promise Based function

$('#search').click(function (event) {
    event.preventDefault()
    let title = $('#title').val()

    $.ajax(`http://www.omdbapi.com/?t=${title}&apikey=11bc5e4c`)
    // Runs when response from the request is successful
    .then(res => {
        console.log(res)
        $('#movie').html(`
        <img src="${res.Poster}" alt="${res.Title}">
        <h2>${res.Title}</h2>
        <h3>Directed by: ${res.Director}</h3>
        <p>${res.Plot}</p>
        <h3><center>Rated</center></h3>
        <p><center>${res.Metascore}</center></p>
        
        `)
    })
    // Runs when request has an error
    .catch(err => { console.log(err) })

})




