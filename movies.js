let favoriteMovies = [
    'Iron Man',
    'Intersteller',
    'Return of the Jedi'
];

function DisplayMovie(favM) {
    let outputString = `let's watch`;
    
 for (const iterator of favM) {
    outputString += `${iterator}, `;
 }
 console.log(favoriteMovies.outputString);
}

DisplayMovie(favoriteMovies);

const movieOptions = [
    { 
        title: "Iron Man",
        reasonWhy: "For my tech savys, there is a lot of tech going on in this move",
        movieImageURL: "https://www.imdb.com/title/tt0371746/mediaviewer/rm1544850432/?ref_=tt_ov_i"
},
{ 
    title: "Intersteller",
    reasonWhy: "Its a trippy movie that will change the way you view the world",
    movieImageURL: "https://image.tmdb.org/t/p/original/yUa0iCocBPsGJ79BwrshHqz45Qc.jpg"
},
{
    title: "Return of the Jedi",
    reasonWhy: "Its a masterpiece, just watch it",
    movieImageURL: "https://image.tmdb.org/t/p/original/ydjp1K13GrnbiX0yjd398BI9xaC.jpg"
}


];

function displaymovieOptions(movieList) {
    console.log("Movie Options:");
    moiveList.foreach(movie => {
        console.log(`Title: ${movie.title}`);
        console.log(`Reason: ${movie.resonWhy}`);
        console.log(`Image: ${movie.movieImageURL}\n`);
    });
}

displayMovieOptions(movieOptions);