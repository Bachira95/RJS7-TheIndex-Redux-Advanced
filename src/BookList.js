import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    query: ""
  };

  setQuery = query => this.setState({ query });

  filterBooks = () => {
    const query = this.state.query.toLowerCase();
    return this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
  };

  render() {
    const bookColor = this.props.match.params.bookColor;
    let books = this.filterBooks();

    if (bookColor) {
      books = books.filter(book => book.color === bookColor);
    }

    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.setQuery} />
        <BookTable books={books} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.booksState.books
  };
};

export default connect(mapStateToProps)(BookList);
