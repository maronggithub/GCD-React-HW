import React from "react";

import "./component.css";

class TodoHeader extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">
          <h1>Jquery To Do List</h1>
          <h2>Simple To do list with adding and filter by diff status</h2>
        </div>
        <div className="InputandButton">
          <input className="HeaderInput" type="text"></input>
          <input
            className="ButtonAdd"
            id="InputButton"
            type="button"
            value="Add"
          ></input>
        </div>
      </div>
    );
  }
}

export default TodoHeader;
