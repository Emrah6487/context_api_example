import React, { Component } from 'react'
import Book from './Book'

export class BookList extends Component {
  render() {
    //props tan gelen books arrayi üzerinde map fonk.uygulamak istiyorum ki bunların 
    //tamamını BookList.js içinde oluşturduğum book componetine göndermek
    const bookList = this.props.books.map((book,i) => {
        return <Book book={book}
                     key={i} />
    })
   
    return (
      <div>
        {bookList}
      </div>
    )
  }
}

export default BookList

