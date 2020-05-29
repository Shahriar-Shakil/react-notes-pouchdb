import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class NewPage extends Component {
  state = {
    note: {
      title: "",
      body: "",
      createAt: undefined,
      updatedAt: undefined
    }
  };
  updateValue = (e) => {
    const {note} = this.state;
    this.setState({
      note: {...note, [e.target.name]: e.target.value}
    });
  };
  handleSave = async (e) => {
    e.preventDefault();
    const id = await this.props.onSave(this.state.note);
    this.props.history.replace(`/notes/${id}`);
  };
  render() {
    const {note} = this.state;
    return (
      <form className="px-5 mx-5" onSubmit={this.handleSave}>
        <fieldset>
          <legend className="text-center">New Note</legend>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Input Title here.."
                className="form-control"
                name="title"
                value={note.title}
                onChange={this.updateValue}
              />
            </div>
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              rows={3}
              name="body"
              value={note.body}
              onChange={this.updateValue}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <Link to="/" className="btn btn-danger">
            Cancle
          </Link>
        </fieldset>
      </form>
    );
  }
}
