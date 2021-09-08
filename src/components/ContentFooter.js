import React from "react";

const ContentFooter = () => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong style={{ marginRight: "3px" }}>2</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a className="selected" href="/">
            All
          </a>
        </li>
        <li>
          <a href="/">Active</a>
        </li>
        <li>
          <a href="/">Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default ContentFooter;
