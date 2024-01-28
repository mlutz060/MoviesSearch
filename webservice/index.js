const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

//routes
app.get('/search-movies', async (req, res) => {
    const { query } = req.query;
    try{
        const apiKey = process.env.API_KEY;
        const database = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
        
        const response = await axios.get(database);

        //limit the data fields that will be returned
        const simplifiedResults = response.data.results.map(movie => ({
            title: movie.title,
            poster_path: movie.poster_path,
            popularity: movie.popularity,
            release_date: movie.release_date,
            summary: movie.overview,
        }));

        //limit the results to 10
        const limitedResults = simplifiedResults.slice(0, 10);

        res.json({results: limitedResults});
    } catch(error){
        console.error('Error fetching data: ', error);
        res.status(500).json({error: 'Internal error'});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


