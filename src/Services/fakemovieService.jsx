import * as genresApi from './fakeGenreService';

const movies = [
  {
    _id: '1',
    title: 'Terminator',
    genre: { _id: '1', name: 'Action' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: '2018-01-03T19:04:28.809Z'
  },
  {
    _id: '2',
    title: 'Die Hard',
    genre: { _id: '1', name: 'Action' },
    numberInStock: 7,
    dailyRentalRate: 2.5
  },
  {
    _id: '3',
    title: 'get out',
    genre: { _id: '2', name: 'Thriller' },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: '4',
    title: 'Killrer',
    genre: { _id: '1', name: 'Action' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: '2018-01-03T19:04:28.809Z'
  },
  {
    _id: '5',
    title: 'Trip To Italy',
    genre: { _id: '3', name: 'Comedy' },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: '6',
    title: 'Airplane',
    genre: { _id: '3', name: 'Comedy' },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: '2018-01-03T19:04:28.809Z'
  },
  {
    _id: '7',
    title: 'wedding crasher',
    genre: { _id: '3', name: 'Comedy' },
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: '8',
    title: 'The Sixth sense',
    genre: { _id: '2', name: 'Thriller' },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: '9',
    title: 'The Avengers',
    genre: { _id: '1', name: 'Action' },
    numberInStock: 4,
    dailyRentalRate: 3.5
  }
];

export function getMovies() {
  return movies;
}
export function getMovie(id) {
  return movies.find(m => m._id === id);
}
export function saveMovies(movie) {
  let movieInDb = movies.find(m => m._id === movieInDb._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresApi.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;
}
