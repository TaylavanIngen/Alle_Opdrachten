const favouriteMovie={

  title:"Jesus Christ Superstar",
  duration: 108,
  stars:["Jesus", "Judas", "Mary", "Peter", "Simon", "Kaiafas", "Annas", "Herod", "Pilate" ]
}

const moviePrint=function(movie){

  console.log(movie.title+ " lasts for "+movie.duration+" minutes. Stars are "+ movie.stars.join(', ')+".");
}

moviePrint(favouriteMovie);
