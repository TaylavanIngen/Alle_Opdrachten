getGenreList().then(responseJSON => {
    let movies = responseJSON
    setMovieGenres(movies)
  console.log("hier is je data om iets mee te gaan doen:", responseJSON);
});

const setMovieGenres = function(movieData){
    const moviesGenres = movieData.genres
    moviesGenres.forEach(movieGenre => {
        const listItem = document.createElement('li');
        const listItemContent = `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`
        listItem.appendChild(document.createTextNode(listItemContent));
        document.getElementById("movieGenresList").append(listItem)
    })
};


getFavorite().then(responseJSON=> {
    let movies2=responseJSON
    setFavorite(movies2)
    console.log("hier heb je je data", responseJSON)
});

const setFavorite=function(array){
  const movieResults =array.movie_results;
  const header=document.createElement('H1');
  const headerContent=`Mijn favo film: ${movieResults.title}`;
  header.appendChild(document.createTextNode(headerContent));
  document.getElementById("favorite").append(header);
}
