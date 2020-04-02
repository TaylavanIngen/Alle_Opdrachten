let API_KEY = "4e3c1eaf874916755ef0525b8ee4a17c";


const getGenreList = async function() {


    const movieGenreApiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

        const result = await fetch(movieGenreApiURL, {
      method: "GET"
    })

    .then(response=>response.json())
    .catch(error=>console.log(error))
 return result;
};


const getFavorite = async function(){


  const favoriteApiUrl= `https://api.themoviedb.org/3/find/tt0096895?api_key=4e3c1eaf874916755ef0525b8ee4a17c&language=en-US&external_source=imdb_id`;
  const result2 = await fetch(favoriteApiUrl, {method:"GET"})
  .then(response=>response.json())
  .catch(error=>console.log(error))
  return result2;
};
