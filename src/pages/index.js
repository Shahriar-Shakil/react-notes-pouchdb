import React, {Component} from "react";
import NoteList from "../components/noteList";

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Notes</h1>
        <NoteList notes={this.props.notes} />
      </div>
    );
  }
}
