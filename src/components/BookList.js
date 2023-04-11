import React, { Component } from 'react'
import Book from './Book'
import './BookList.css'

export class BookList extends Component {
  render() {
    //props tan gelen books arrayi üzerinde map fonk.uygulamak istiyorum ki bunların 
    //tamamını BookList.js içinde oluşturduğum book componetine göndermek
    const bookList = this.props.books.map((book,i) => {
        return <Book book={book}
                     key={i} />
    })
   
    return (
        <section className="page-section"  id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">BookFolio</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                
            </div>
            <div className="row">

              {bookList}

            </div>
        </div>
    </section>
    )
  }
}

export default BookList

