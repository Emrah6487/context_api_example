import React, { Component } from 'react'

export class Book extends Component {
  render() {
    console.log(this.props.book)
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <p>{this.props.book.author}</p>

      </div>
    )
  }
}

export default Book
