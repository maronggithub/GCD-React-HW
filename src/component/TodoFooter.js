import React from "react";
import "./component.css";

class TodoFooter extends React.Component {
  render() {
    return (
      <div className="Footer">
        <ul id="nav">
          <li class="FoorterItemOne">Complete</li>
          <li class="FoorterItemTwo">Activty</li>
          <li class="FoorterItemThree">All</li>
        </ul>
      </div>
    );
  }
}

export default TodoFooter;
