import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import axios from "axios";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import BookList from "./BookList";

const App = ({ loading }) => {
  const getView = () => {
    if (loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route path="/authors/" component={AuthorsList} />
          <Route path="/books/:bookColor?" component={BookList} />
        </Switch>
      );
    }
  };
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.authorsState.loading || state.booksState.loading
  };
};

export default withRouter(connect(mapStateToProps)(App));

// fetchAllAuthors = async () => {
//   const res = await instance.get("/api/authors/");
//   return res.data;
// };

// fetchAllBooks = async () => {
//   const res = await instance.get("/api/books/");
//   return res.data;
// };

//   async componentDidMount() {
//     try {
//       const authorsReq = this.fetchAllAuthors();
//       const booksReq = this.fetchAllBooks();

//       const authors = await authorsReq;
//       const books = await booksReq;

//       this.setState({
//         authors: authors,
//         books: books,
//         loading: false
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   getView = () => {
//     if (this.state.loading) {
//       return <Loading />;
//     } else {
//       return (
//         <Switch>
//           <Redirect exact from="/" to="/authors" />
//           <Route path="/authors/:authorID" component={AuthorDetail} />
//           <Route
//             path="/authors/"
//             render={props => (
//               <AuthorsList {...props} authors={this.state.authors} />
//             )}
//           />
//           <Route
//             path="/books/:bookColor?"
//             render={props => <BookList {...props} books={this.state.books} />}
//           />
//         </Switch>
//       );
//     }
//   };

//   render() {
//     return (
//       <div id="app" className="container-fluid">
//         <div className="row">
//           <div className="col-2">
//             <Sidebar />
//           </div>
//           <div className="content col-10">{this.getView()}</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
