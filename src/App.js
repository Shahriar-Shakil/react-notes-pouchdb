import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";

import IndexPage from "./pages";
import ShowPage from "./pages/show";
import Navbar from "./components/navbar";
import NewPage from "./pages/new";

import DB from "./db";
export default class App extends Component {
  state = {
    db: new DB(),
    notes: {},
    loading: true
  };
  async componentDidMount() {
    const notes = await this.state.db.getAllNotes();
    this.setState({notes, loading: false});
  }
  handleSave = async (note) => {
    let {id} = await this.state.db.createNote(note);

    const {notes} = this.state;
    this.setState({
      notes: {
        ...notes,
        [id]: note
      }
    });
    return id;
  };
  renderContent() {
    if (this.state.loading) {
      return <h2>loading....</h2>;
    }
    return (
      <div className="app-content text-center">
        <Route
          exact
          path="/"
          component={(props) => (
            <IndexPage {...props} notes={this.state.notes} />
          )}
        ></Route>
        <Route
          exact
          path="/notes/:id"
          component={(props) => (
            <ShowPage
              {...props}
              note={this.state.notes[props.match.params.id]}
            />
          )}
        ></Route>
        <Route
          exact
          path="/new"
          component={(props) => <NewPage {...props} onSave={this.handleSave} />}
        ></Route>
      </div>
    );
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <Navbar />
          {this.renderContent()}
        </div>
      </BrowserRouter>
    );
  }
}
