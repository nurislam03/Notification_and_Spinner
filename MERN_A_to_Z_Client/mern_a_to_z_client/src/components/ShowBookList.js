import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

// spinner file
import Spinner from './common/Spinner';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/books')
      .then(res => {
        this.setState({
          books: res.data,
          loading: false
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const books = this.state.books;
    const loading = this.state.loading;
    // console.log("PrintBook: " + books);

    let bookList;

    if(books === null || loading) {
      bookList = <Spinner />;
    } else {
      if (books) {
        bookList = books.map((book, k) =>
          <BookCard book={book} key={k} />
        );
      } else {
        bookList = <h3 className="text-center">there is no book recored!</h3>;
      }
    }

    const BOOKLIST = (
      <div className="list">
        {bookList}
      </div>
    );

    const SPINNER = (
      <div>
        {bookList}
      </div>
    );

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          {loading ? SPINNER : BOOKLIST}

        </div>
      </div>
    );
  }
}

export default ShowBookList;
