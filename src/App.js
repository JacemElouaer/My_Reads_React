import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import DislpayBooks from './components/DislpayBooks';
import Search from './components/search';


import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSVG: false,
  }

  getAllBooks() {
    BooksAPI.getAll().then((response) => {
      this.setState({ books: response });
    });
  }
  componentDidMount() {
    this.getAllBooks();
  }
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks();
      this.showSVG();
      this.sleep(1500).then(() => {
        // Do something after the sleep!
        this.hideSVG();
      });

    });
  };
  showSVG = () => {
    this.setState({
      showSVG: true,
    });
  };
  hideSVG = () => {
    this.setState({
      showSVG: false,
    });
  };

  render() {
    if (this.state.showSVG) {
      return (
          <div>
              
          </div>
      );
  }
    return (
      <div>
        <Route exact path='/' render={() => (

          <DislpayBooks

            books={this.state.books}
            updateShelf={this.updateShelf}
          >

          </DislpayBooks>)}
        />
        <Route exact path='/search'
          render={() => (
            <Search
              updateShelf={this.updateShelf}
              Details={this.state.books}

            ></Search>
          )} />
      </div>
    )
  }
}

export default BooksApp
