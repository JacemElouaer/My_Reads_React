import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book'


export class Search extends Component {
    state = {
        query: "",
        results: []
    }
    // Charge() {
    //     this.setState({
    //         books : this.props.Details
    //     }) 
    // }
    Updatequery(query) {

        this.setState({ query: query });
        if (query.length > 0) {
            BooksAPI.search(query).then((data) => {
                if (typeof data !== 'undefined' && data.length > 0) {
                    this.setState({ results: data });
                }
            }).catch(this.setState({ results: [] }));
        } else {
            this.setState({ results: [] });
        }
    }



    render() {

        const { query } = this.state;
        return (
            <div>
                {this.charge}
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search" >Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => { this.Updatequery(event.target.value) }} />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid" >
                            {this.state.results.map((e) => {
                                let bookinShelf = this.props.Details.find(
                                    (b) => b.id === e.id
                                );
                                if (bookinShelf) {
                                    e.shelf = bookinShelf.shelf;
                                } else {
                                    e.shelf = 'none'
                                }
                                console.log(e.id);
                                return (
                                    e.title &&
                                    e.imageLinks &&
                                    e.imageLinks.thumbnail &&
                                    e.authors &&
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

                            })

                            }
                        </ol>

                    </div>
                </div>
            </div>

        )
    }
}

export default Search
