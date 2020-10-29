import React from "react";
import TodoItem from "./component/TodoItem";
import TodoFooter from "./component/TodoFooter";
import TodoHeader from "./component/TodoHeader";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoHeader></TodoHeader>
        <TodoItem></TodoItem>
        <TodoFooter></TodoFooter>
      </div>
    );
  }
}

export default App;
