import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Shelf from './shelf'
import Book from './Book';
const Shelves = [
  { title: 'Currently reading', value: 'currentlyReading' },
  { title: 'Want to read', value: 'wantToRead' },
  { title: 'Read', value: 'read' },
];
export class DislpayBooks extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }
  render() {
    return (
      <div>

        <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {Shelves.map((f) => {
                return (
                  <Shelf
                    key={f.title}
                    title={f.title}

                    Books={this.props.books.map(
                      (e) => {
                        if (
                          e.shelf === f.value
                        ) {
                          return (
                            <Book
                              key={e.id}
                              Book={e}
                              title={e.title}
                              updateShelf={this.props.updateShelf}
                              imageLinks={e.imageLinks.thumbnail}
                              authors={e.authors}
                              value={e.shelf}
                            />
                          );
                        }
                      }
                    )}
                  />
                );
              })}
            </div>
          </div>
          <div className="open-search">
            <Link to="/search"><button>Add a book</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DislpayBooks
