import React, { Component } from 'react'
import {getMovies} from '../Services/fakemovieService'
export class Movies extends Component {
  state = {
    movies:getMovies()
  }
   handleDelete = (movie)=>{
    let movies = this.state.movies.filter(m=>m._id !==movie._id)
    this.setState({movies})
   }
  render() {
    const {length:count} = this.state.movies
      if(count===0){
        return (<p className="text-center text-danger mt-5 display-4">There are no movies in the database</p>)
      }
    return(
      <div className="container">
      <p className="text-center text-success m-5 display-3 text-capitalize">there are {count} in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Remove</th>
          </tr>
        </thead>
         <tbody>
            {this.state.movies.map(movie=>(
                    <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick = {()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                  </tr>
            ))}
           
         </tbody>
      </table>
      </div>
    )
    
  }
}

export default Movies
