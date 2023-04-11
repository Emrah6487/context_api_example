import React, { Component } from 'react'
import Book from './Book'
import './BookList.css'
import BookContext from '../contexts/BookContext'//3.

export class BookList extends Component {
  //ilk önce oluşturduğumuz bookcontex i static olarak contexType yapalım
  static contextType = BookContext;//4.

  render() {

    const books = this.context//5.

    //props tan gelen books arrayi üzerinde map fonk.uygulamak istiyorum ki bunların 
    //tamamını BookList.js içinde oluşturduğum book componetine göndermek


    return (
      <section className="page-section" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">BookFolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>

          </div>
          <div className="row">

            {books.map((book, i) => {
              return <Book book={book}
                key={i} />
            })}

          </div>
        </div>
      </section>
    )
  }
}

export default BookList

