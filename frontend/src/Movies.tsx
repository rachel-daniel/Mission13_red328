import { useState } from 'react';
import data from './MovieData.json';

const movies = data.MovieData;

function MovieList() {
  const [ListOfMovies] = useState(movies); // we don't need setListofMovies because we're not changing anything

  return (
    <>
      <div>
        <h1>Greatest Movies According to Joel</h1>
      </div>

      <div>
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {ListOfMovies.map((m) => (
              <tr key={m.Title}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
