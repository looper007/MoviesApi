Run using node src/server.js

Testing the API
Access movies without search or pagination: GET http://localhost:3000/movies
Search movies by title or director: GET http://localhost:3000/movies?searchText=star
Paginate through results: GET http://localhost:3000/movies?page=2&pageSize=10
