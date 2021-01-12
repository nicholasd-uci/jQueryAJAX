// Promise Based function

$('#search').click(function (event) {
    event.preventDefault()
    let title = $('#title').val()

    $.ajax(`http://www.omdbapi.com/?t=${title}&apikey=11bc5e4c`)
    // Runs when response from the request is successful
    .then(res => {
        console.log(res)
        $('#movie').html(`s

        <center><img src="${res.Poster}" alt="${res.Title}"></center>
        <h2><center>Movie Title: ${res.Title}</center></h2>
        <h3><center>Directed by: ${res.Director}</center></h3>
        <center><p>Movie Plot: ${res.Plot}</p></center>
        <h3><center>Movie Rating</center></h3>
        <h4><center>${res.Metascore}</center></h4>
        
        `)
    })
    // Runs when request has an error
    .catch(err => { console.log(err) })

})




