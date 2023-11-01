import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

function App() {
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=64e1df83';
const [movies,setMovies] =useState([])
// let [inicount,setCount] = useState(10);


// const movie1 =
//   {
//       "Title": "Italian Spiderman",
//       "Year": "2007",
//       "imdbID": "tt2705436",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
//   }





const searchMovies = async (title)=>{
  const response = await fetch(`${API_URL}&S=${title}`);
  const data = await response.json();
  console.log(data.Search);
  setMovies(data.Search);
}

// let count = 0;

// let updateCount = ()=>{
//   inicount++;
//   setCount(inicount++)
// }

useEffect(()=>{
  //call function tht is going to fetch movies
  searchMovies('spiderman');
},[]);
 return (
    <div className="app">
    
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="search for movies" value="Superman" onChange={()=>{}}></input>
      </div>
      <img className="srchIcn"src={SearchIcon} alt="search" onClick={()=>{}}/>


{
  movies?.length>0 ? (
    <div className="container">
      {
        movies.map((movie)=>(
          <MovieCard movie1={movie}></MovieCard>
        ))
      }
    <MovieCard movie1={movies[8]} />
</div>
  ) : (
   <div>
    <h1>No movie</h1>
   </div>

  )
}


     


    </div>
  );
}

export default App;
