# BYU-Coding-Challenge

This is a coding assesment from BYU. The main objective of the assignment is to create 
a simple full stack application that allows users to view a site and search for movies 
then get data from themoviedb.org and return 10 results.

1. The frontend is created using Vuejs 
2. The backend is created using Nodejs and Express


## Running the Application

You will need to make sure that the frontend and backend are running simultaneously for the application to work properly. 

1. Make sure you have two terminals open 
2. In the first terminal type 'cd .\webservice\' then hit enter. This will change your directory to the folder our backend project is in.
3. Type 'node index.js' then hit enter to start the backend portion of the project
4. In the second terminal type 'cd .\webapp\' and hit enter to get into our frontend directory.
5. Type 'npm run serve' and hit enter to start the project.
6. You can now click on the Local: localhost link that appears in the terminal to see the project 

## IMPORTANT
You will have to change the apiKey in the index.js file to match your personal key given to you from themoviedb.org 


## Next Steps
There are a few directions I could take moving forward with this project. The first thing I know I want to do is add a movie details page. Users will be able to click on a movie as it shows up in the search and will be redirected to a page with all of the movie details. 
A possible step after that is to create a login functionality for users. They might sign into the application and add movies to a watch list or be able to write reviews. If I did go in this direction I would need to include a blog component to the application. I would probably put this 'blog' section on the bottom of the movie details page. 
Finally I would want to add a user page, were users might be able to see all of their information and update it as necessary. They would be able to access their watchlist and see all of the reviews that they have made in the past. 