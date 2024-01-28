<template>
  <div class='main'>
    <div class='search'>
      <div class="title">
        <img src="../assets/long.svg" alt="The movie database logo" class="logo">
      </div>
      <input v-model='searchQuery' placeholder='Enter movie title here'>
      <button @click='searchMovies'>Search</button>
    </div>
    <div class='results' v-if='movies.length > 0'>
      <h2>Results:</h2>
      <ul>
        <li class='results-card' v-for='movie in movies.slice(0,10)' :key='movie.title'>
          <img class='movie-poster' v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" />
          <div>
            <h3>{{ movie.title }}</h3> 
            <h4>Released: {{ movie.release_date }}</h4>
            <h4>Popularity: {{ movie.popularity }}</h4>
          </div>
          <p>{{ limitOverview(movie.summary) }}</p>
        </li>
      </ul>
    </div>
    <div id="attributuions">
      <p>This data was contributed from The Movie Database</p>
      <span>https://www.themoviedb.org/settings/api</span>
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      searchQuery: '',
      movies: [],
    };
  },
  methods: {
    //function to get user input and send to the back
    async searchMovies(){
      try{
        const response = await fetch(`http://localhost:3000/search-movies?query=${this.searchQuery}`);
        const data = await response.json();

        console.log(data);

        this.movies = data.results || [];
      } catch(error){
        console.error('Error fetching frontend: ', error);
      }
    },
    //function to limit the summary on this page
    limitOverview(overview){
      const maxLength = 100;
      if (overview.length > maxLength){
        return overview.substring(0, maxLength) + '...';
      } else{
        return overview;
      }
    }
  },
};
</script>

<style scoped>
  .main{
    padding-top: 1em;
  }
  .search{
    width: 80%;
    margin: 0 auto;
    padding: 1em;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 7px 10px #121a24;
  }
  input{
    padding: 1em;
    width: 80%;
    margin: 0 auto;
  }
  button{
    margin: 1em;
    width: 300px;
    height: 30px;
    background-color: #2c3e50;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 2px  rgb(199, 199, 199);
    color: #fffdf3;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  button:hover{
    transform: translateY(-2px); /* Add a slight upward movement on hover */
    box-shadow: 0px 6px 10px rgb(199, 199, 199);
  }
  ul{
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
  li{
    margin: 2em;
    padding: 0.5em;
    border-radius: 8px;
    box-shadow: 0px 7px 10px #121a24;
    width: 200px;
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  .results-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  .movie-poster{
    width: 100%;
    margin: 0 auto;
    height: auto;
    border-radius: 8px;
  }
  .main {
    min-height: 100vh; /* Set the minimum height to at least 100% of the viewport height */
    display: flex;
    flex-direction: column;
  }
  .attributions {
    background-color: #0d1218;
    color: white;
    padding: 1em; /* Add some padding for better visibility */
    margin-top: auto; /* Push the attributions to the bottom */
  }
  .title{
    width: 80%;
    margin: 0 auto;
    padding: 1em;
  }

</style>
