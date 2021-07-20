import React, { Component } from 'react'


export class Book extends Component {
    render() {
        const { key,  title, imageLinks, authors, value ,updateShelf} = this.props;
        return (
           <li>

                <div className="book" >
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${imageLinks})`
                        }}></div>
                        <div className="book-shelf-changer">
                            <select
                                value={value}
                                onChange={(event) => {
                                    updateShelf(
                                        this.props.Book,
                                        event.target.value
                                    );
                                    console.log(this.props.book);
                                }}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
             </li>
        )
    }
}

export default Book
