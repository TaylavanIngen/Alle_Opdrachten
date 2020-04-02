let API_KEY = "4e3c1eaf874916755ef0525b8ee4a17c";


const getData = async function() {


    const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
      try {
        const res = await fetch(apiURL, {
      method: "GET"
    });

    const data = await res.json();
    return data;
  } catch (error) {

    console.error(error);
  }
};
