import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorsList extends Component {
  state = {
    query: ""
  };

  setQeury = query => this.setState({ query });

  filterAuthors = () => {
    const query = this.state.query.toLowerCase();
    return this.props.authors.filter(author => {
      return `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query);
    });
  };

  render() {
    const authorCards = this.filterAuthors().map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar onChange={this.setQeury} />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authorsState.authors
  };
};

export default connect(mapStateToProps)(AuthorsList);
